class ProceduralMusic {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
        this.isPlaying = false;
        this.timerID = null;
        this.eventsTimeline = [];
        this.scheduleAheadTime = 0.5; 
        this.lookahead = 50.0;
        this.timelineCursor = 0;
        this.startTime = 0;
        this.levelData = null;
    }

    parseLevel(levelData) {
        this.levelData = levelData;
        this.eventsTimeline = [];
        
        let currentPos = { x: 0, z: 0 };
        let tiles = [{ pos: { ...currentPos } }];
        for(let i=0; i<levelData.path.length; i++) {
            const dir = levelData.path[i];
            if (dir === 'U') currentPos.z -= 2;
            if (dir === 'D') currentPos.z += 2;
            if (dir === 'L') currentPos.x -= 2;
            if (dir === 'R') currentPos.x += 2;
            tiles.push({ pos: { ...currentPos } });
        }

        let startAngle = 0;
        let currentBPM = levelData.bpm;
        let orbitDir = 1;
        let accumulatedTime = 0;

        for(let i=0; i<tiles.length - 1; i++) {
            const pivot = tiles[i].pos;
            const next = tiles[i+1].pos;
            const targetAngle = Math.atan2(next.z - pivot.z, next.x - pivot.x);
            
            if (i === 0) {
                startAngle = targetAngle + Math.PI;
            }
            
            let diff = (targetAngle - startAngle) * orbitDir;
            diff = diff % (Math.PI * 2);
            if (diff <= 0) diff += Math.PI * 2;
            
            if (Math.abs(diff - Math.PI) < 0.01) diff = Math.PI;
            if (Math.abs(diff - Math.PI/2) < 0.01) diff = Math.PI/2;
            if (Math.abs(diff - Math.PI*1.5) < 0.01) diff = Math.PI*1.5;
            if (Math.abs(diff - Math.PI*2) < 0.01) diff = Math.PI*2;
            
            const timeToHit = diff / ((currentBPM / 60) * Math.PI);
            accumulatedTime += timeToHit;
            
            this.eventsTimeline.push({
                time: accumulatedTime,
                tileIndex: i + 1,
                diff: diff,
                bpm: currentBPM
            });
            
            if (levelData.events && levelData.events[i + 1]) {
                const ev = levelData.events[i + 1];
                if (ev.type === 'twirl') {
                    orbitDir *= -1;
                } else if (ev.type === 'speed') {
                    currentBPM = ev.bpm;
                }
            }
            
            startAngle = Math.atan2(pivot.z - next.z, pivot.x - next.x);
        }
    }

    start(bpm, seed) {
        if (!this.levelData) return;
        
        const bgm = document.getElementById('bgm');
        if (this.levelData.audioSrc && bgm) {
            bgm.src = this.levelData.audioSrc;
            bgm.volume = 0.5;
            bgm.currentTime = 0;
            bgm.play().catch(e => console.log(e));
            this.isPlaying = false; 
            return;
        } else if (bgm) {
            bgm.pause();
        }

        if (this.ctx.state === 'suspended') this.ctx.resume();
        this.isPlaying = true;
        this.timelineCursor = 0;
        this.startTime = this.ctx.currentTime + 0.1; 
        
        this.playChord(this.startTime, 0);
        this.scheduler();
    }

    stop() {
        this.isPlaying = false;
        clearTimeout(this.timerID);
        
        const bgm = document.getElementById('bgm');
        if (bgm) bgm.pause();
        
        if (this.masterGain) {
            this.masterGain.disconnect();
        }
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
    }

    scheduler() {
        while (this.timelineCursor < this.eventsTimeline.length) {
            const ev = this.eventsTimeline[this.timelineCursor];
            const eventAbsoluteTime = this.startTime + ev.time;
            
            if (eventAbsoluteTime < this.ctx.currentTime + this.scheduleAheadTime) {
                this.scheduleNote(ev, eventAbsoluteTime);
                this.timelineCursor++;
            } else {
                break;
            }
        }
        
        if (this.isPlaying) {
            this.timerID = setTimeout(() => this.scheduler(), this.lookahead);
        }
    }

    scheduleNote(ev, time) {
        this.playKick(time);
        
        if (Math.abs(ev.diff - Math.PI) < 0.1) {
            this.playHiHat(time - (30.0 / ev.bpm));
        }

        this.playPluck(time, ev.tileIndex);
        
        if (ev.tileIndex % 4 === 0) {
            this.playChord(time, ev.tileIndex);
        }
    }

    playChord(time, index) {
        const seed = this.levelData.musicSeed || 0;
        const chordProgression = seed === 0 ? [0, 5, 3, 4] : (seed === 1 ? [0, 4, 5, 3] : [5, 3, 0, 4]);
        const root = 220; 
        const intervals = [1, 1.122, 1.259, 1.334, 1.498, 1.681, 1.887]; 
        
        const bar = Math.floor(index / 4);
        const chordIdx = chordProgression[bar % 4];
        
        const f1 = root * intervals[chordIdx % 7] * (chordIdx >= 7 ? 2 : 1);
        const f2 = root * intervals[(chordIdx + 2) % 7] * ((chordIdx + 2) >= 7 ? 2 : 1);
        const f3 = root * intervals[(chordIdx + 4) % 7] * ((chordIdx + 4) >= 7 ? 2 : 1);

        this.playSynth(f1, time, 1.0);
        this.playSynth(f2, time, 1.0);
        this.playSynth(f3, time, 1.0);
    }
    
    playPluck(time, index) {
        const seed = this.levelData.musicSeed || 0;
        const root = 440; 
        const pentatonic = [1, 1.122, 1.259, 1.498, 1.681, 2.0];
        
        const noteIdx = (index * 7 + seed * 3) % pentatonic.length;
        const freq = root * pentatonic[noteIdx];
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.connect(gain);
        gain.connect(this.masterGain);
        
        osc.frequency.setValueAtTime(freq, time);
        
        gain.gain.setValueAtTime(0.3, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);
        
        osc.start(time);
        osc.stop(time + 0.3);
    }

    playKick(time) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.masterGain);
        
        osc.frequency.setValueAtTime(150, time);
        osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);
        
        gain.gain.setValueAtTime(0.8, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
        
        osc.start(time);
        osc.stop(time + 0.5);
    }

    playHiHat(time) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.connect(gain);
        gain.connect(this.masterGain);
        
        osc.frequency.setValueAtTime(8000, time);
        
        gain.gain.setValueAtTime(0.1, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
        
        osc.start(time);
        osc.stop(time + 0.1);
    }

    playSynth(freq, time, duration) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.connect(gain);
        gain.connect(this.masterGain);
        
        osc.frequency.setValueAtTime(freq, time);
        
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.1, time + duration * 0.1);
        gain.gain.setValueAtTime(0.1, time + duration * 0.8);
        gain.gain.linearRampToValueAtTime(0, time + duration);
        
        osc.start(time);
        osc.stop(time + duration);
    }
}

export const musicPlayer = new ProceduralMusic();
