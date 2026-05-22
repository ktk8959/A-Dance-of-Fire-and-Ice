import * as THREE from 'three';
import { levels } from './levels.js';
import { musicPlayer } from './music.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0f0f15); 
scene.fog = new THREE.Fog(0x0f0f15, 50, 300);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const cameraHeight = 22;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); 
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
dirLight.position.set(10, 30, 10);
dirLight.castShadow = false;
scene.add(dirLight);

const floorGeo = new THREE.PlaneGeometry(500, 500);
const floorMat = new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.9, metalness: 0.1 });
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -10; 
floor.receiveShadow = true;
scene.add(floor);

const tileSize = 2; 
const tileGeo = new THREE.BoxGeometry(tileSize * 0.95, 0.5, tileSize * 0.95);
const passedTileMat = new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 0.8 });
const targetTileMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x444444 });
const triggerTileMat = new THREE.MeshStandardMaterial({ color: 0x88ff88, emissive: 0x004400 }); 

let tiles = [];
let triggerLabels = [];

const sphereGeo = new THREE.SphereGeometry(tileSize * 0.35, 32, 32);
const fireMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xff3300, emissiveIntensity: 2, roughness: 0.2 });
const iceMat = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x0066ff, emissiveIntensity: 2, roughness: 0.2 });

const fireSphere = new THREE.Mesh(sphereGeo, fireMat);
fireSphere.castShadow = true;
const iceSphere = new THREE.Mesh(sphereGeo, iceMat);
iceSphere.castShadow = true;

scene.add(fireSphere);
scene.add(iceSphere);

const particles = [];
const particleGeo = new THREE.SphereGeometry(tileSize * 0.15, 8, 8);

function spawnParticle(position, isFire) {
    const mat = isFire ? fireMat : iceMat;
    const mesh = new THREE.Mesh(particleGeo, mat); 
    mesh.position.copy(position);
    scene.add(mesh);
    particles.push({ mesh, life: 1.0 });
}

function updateParticles(delta) {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= delta * 3.5; 
        if (p.life <= 0) {
            scene.remove(p.mesh);
            particles.splice(i, 1);
        } else {
            p.mesh.scale.setScalar(p.life);
            p.mesh.position.y += delta * 0.5; 
        }
    }
}

let currentLevelData = null;
let gameState = 'start'; 
let currentTileIndex = 0;
let pivotSphere = fireSphere;
let orbitSphere = iceSphere;
let bpm = 120; 
let angularVelocity = (bpm / 60) * Math.PI; 
let startAngle = 0;
let targetAngle = 0;
let targetAccumulatedAngle = 0;
let accumulatedAngle = 0;
let branchTargetAccumulatedAngle = null;
let backTargetAccumulatedAngle = null;
let orbitDir = 1; 

let targetCameraAngle = 0;
let currentCameraAngle = 0;
let targetCameraHeight = 22;
let currentCameraHeight = 22;
let targetCameraRadius = 0;
let currentCameraRadius = 0;
let score = 0;
const tolerance = 0.5;
const cameraTarget = new THREE.Vector3();

const uiStart = document.getElementById('start-screen');
const uiGame = document.getElementById('game-ui');
const uiGameOver = document.getElementById('game-over-screen');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');
const levelTitleEl = document.getElementById('level-title');
const countdownEl = document.getElementById('countdown-screen');
let countdownTimer = null;

function refreshTileMaterials() {
    tiles.forEach((t) => {
        if (t.isDeleted) return;
        t.mesh.material = t.baseMat;
        if (t.branchMesh) t.branchMesh.material = triggerTileMat;
    });
    if (currentLevelData.id !== 'hub') {
        for (let i = 0; i <= currentTileIndex; i++) {
            if (tiles[i] && !tiles[i].isDeleted) tiles[i].mesh.material = passedTileMat;
        }
    }
    if (currentTileIndex + 1 < tiles.length) {
        if (!tiles[currentTileIndex + 1].isDeleted) tiles[currentTileIndex + 1].mesh.material = targetTileMat;
    }
}

function loadLevel(levelId) {
    musicPlayer.stop(); 
    currentLevelData = levels[levelId];
    tiles.forEach(t => {
        scene.remove(t.mesh);
        if (t.branchMesh) scene.remove(t.branchMesh);
        if (t.trackMesh) scene.remove(t.trackMesh);
    });
    tiles.length = 0;
    document.getElementById('labels-container').innerHTML = '';
    triggerLabels.length = 0;
    
    let currentYOffset = 0;
    let currentPos = new THREE.Vector3(0, 0, 0);
    tiles.push({ pos: currentPos.clone() });
    
    for (let i = 0; i < currentLevelData.path.length; i++) {
        const dir = currentLevelData.path[i];
        if (dir === 'U') currentPos.z -= tileSize;
        if (dir === 'D') currentPos.z += tileSize;
        if (dir === 'L') currentPos.x -= tileSize;
        if (dir === 'R') currentPos.x += tileSize;
        if (dir === 'E') { currentPos.x += tileSize; currentPos.z -= tileSize; }
        if (dir === 'C') { currentPos.x += tileSize; currentPos.z += tileSize; }
        if (dir === 'Z') { currentPos.x -= tileSize; currentPos.z += tileSize; }
        if (dir === 'Q') { currentPos.x -= tileSize; currentPos.z -= tileSize; }
        if (currentLevelData.events && currentLevelData.events[i]) {
            const ev = currentLevelData.events[i];
            if (ev.type === 'elevation' || ev.amount !== undefined) {
                currentYOffset += ev.amount * tileSize;
            }
        }
        let tileObj = { pos: currentPos.clone() };
        tileObj.pos.y = currentYOffset;
        if (currentLevelData.branches && currentLevelData.branches[i + 1]) {
            const branch = currentLevelData.branches[i + 1];
            let bPos = tileObj.pos.clone();
            if (branch.dir === 'U') bPos.z -= tileSize;
            if (branch.dir === 'D') bPos.z += tileSize;
            if (branch.dir === 'L') bPos.x -= tileSize;
            if (branch.dir === 'R') bPos.x += tileSize;
            if (branch.dir === 'E') { bPos.x += tileSize; bPos.z -= tileSize; }
            if (branch.dir === 'C') { bPos.x += tileSize; bPos.z += tileSize; }
            if (branch.dir === 'Z') { bPos.x -= tileSize; bPos.z += tileSize; }
            if (branch.dir === 'Q') { bPos.x -= tileSize; bPos.z -= tileSize; }
            tileObj.branchPos = bPos;
            tileObj.branchData = branch;
        }
        tiles.push(tileObj);
    }
    
    tiles.forEach((tile, index) => {
        const customColor = (currentLevelData.events && currentLevelData.events[index] && currentLevelData.events[index].color !== undefined) 
            ? currentLevelData.events[index].color 
            : 0xcccccc;
        let mat = new THREE.MeshStandardMaterial({ color: customColor, roughness: 0.2, metalness: 0.1 });
        tile.baseMat = mat;
        const mesh = new THREE.Mesh(tileGeo, mat);
        mesh.position.copy(tile.pos);
        mesh.position.y = tile.pos.y - 0.25;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        tile.mesh = mesh;
        if (index < currentLevelData.path.length) {
            const nextPos = tiles[index+1].pos;
            const distance = tile.pos.distanceTo(nextPos);
            const trackGeo = new THREE.BoxGeometry(0.15, 0.05, distance);
            const trackMesh = new THREE.Mesh(trackGeo, targetTileMat);
            const midPoint = new THREE.Vector3().addVectors(tile.pos, nextPos).multiplyScalar(0.5);
            trackMesh.position.copy(midPoint);
            trackMesh.position.y += 0.01; 
            trackMesh.lookAt(nextPos);
            scene.add(trackMesh);
            tile.trackMesh = trackMesh;
        }
        if (tile.branchPos) {
            const bMesh = new THREE.Mesh(tileGeo, triggerTileMat);
            bMesh.position.copy(tile.branchPos);
            bMesh.position.y = tile.branchPos.y - 0.25;
            scene.add(bMesh);
            tile.branchMesh = bMesh;
            const el = document.createElement('div');
            el.className = 'level-label';
            el.innerText = tile.branchData.name;
            document.getElementById('labels-container').appendChild(el);
            triggerLabels.push({ el, pos: tile.branchPos });
        }
        if (currentLevelData.events && currentLevelData.events[index]) {
            const ev = currentLevelData.events[index];
            if (ev.type === 'twirl' || ev.twirl) {
                const twirlGeo = new THREE.TorusGeometry(0.4, 0.08, 8, 16);
                const twirlMat = new THREE.MeshStandardMaterial({ color: 0xff00ff, emissive: 0x550055 });
                const twirlMesh = new THREE.Mesh(twirlGeo, twirlMat);
                twirlMesh.rotation.x = Math.PI / 2;
                twirlMesh.position.y = 0.5;
                mesh.add(twirlMesh);
                tile.gimmickMesh = twirlMesh;
            } 
            if (ev.type === 'speed' || ev.bpm !== undefined) {
                const isFast = ev.bpm > 130;
                const speedGeo = new THREE.ConeGeometry(0.2, 0.5, 8);
                const speedMat = new THREE.MeshStandardMaterial({ color: isFast ? 0xff3333 : 0x3333ff, emissive: isFast ? 0x440000 : 0x000044 });
                const speedMesh = new THREE.Mesh(speedGeo, speedMat);
                speedMesh.position.y = 0.5;
                mesh.add(speedMesh);
                tile.gimmickMesh = speedMesh;
            } 
            if (ev.type === 'camera' || ev.angle !== undefined || ev.height !== undefined) {
                const camGeo = new THREE.OctahedronGeometry(0.25);
                const camMat = new THREE.MeshStandardMaterial({ color: 0xffff00, emissive: 0x555500 });
                const camMesh = new THREE.Mesh(camGeo, camMat);
                camMesh.position.y = 0.8;
                mesh.add(camMesh);
                tile.gimmickMesh = camMesh;
            } 
            if (ev.type === 'elevation' || ev.amount !== undefined) {
                const elevGeo = new THREE.CylinderGeometry(0.1, 0.3, 0.5, 8);
                const isUp = ev.amount > 0;
                const elevMat = new THREE.MeshStandardMaterial({ color: isUp ? 0x00ff00 : 0xff00ff, emissive: isUp ? 0x005500 : 0x550055 });
                const elevMesh = new THREE.Mesh(elevGeo, elevMat);
                elevMesh.position.y = 0.5;
                if (!isUp) elevMesh.rotation.x = Math.PI;
                mesh.add(elevMesh);
                tile.gimmickMesh = elevMesh;
            }
        }
    });
    levelTitleEl.innerText = currentLevelData.name;
    bpm = currentLevelData.bpm;
    angularVelocity = (bpm / 60) * Math.PI;
    musicPlayer.parseLevel(currentLevelData);
    if (levelId === 'hub' && gameState === 'start') {
    } else {
        resetGameLogic();
    }
}

function resetGameLogic() {
    currentTileIndex = 0;
    pivotSphere = fireSphere;
    orbitSphere = iceSphere;
    score = 0;
    scoreEl.innerText = score;
    orbitDir = 1; 
    bpm = currentLevelData.bpm;
    angularVelocity = (bpm / 60) * Math.PI;
    targetCameraAngle = 0;
    targetCameraHeight = 22;
    targetCameraRadius = 0;
    
    for (let i = 0; i < tiles.length; i++) {
        const t = tiles[i];
        t.isDeleted = false;
        t.mesh.position.y = t.pos.y - 0.25;
        t.mesh.rotation.set(0, 0, 0);
        scene.add(t.mesh);
        if (t.branchMesh) {
            t.branchMesh.position.y = t.branchPos.y - 0.25;
            t.branchMesh.rotation.set(0, 0, 0);
            scene.add(t.branchMesh);
        }
        if (t.trackMesh) {
            scene.add(t.trackMesh);
            const nextTile = tiles[i + 1];
            if (nextTile) {
                const midPoint = new THREE.Vector3().addVectors(t.pos, nextTile.pos).multiplyScalar(0.5);
                t.trackMesh.position.copy(midPoint);
                t.trackMesh.position.y += 0.01;
                t.trackMesh.rotation.set(0, 0, 0);
                t.trackMesh.lookAt(nextTile.pos);
            }
        }
    }
    refreshTileMaterials();
    pivotSphere.position.copy(tiles[0].pos);
    pivotSphere.position.y = tiles[0].pos.y + tileSize * 0.35;
    const nextPos = tiles[1].pos;
    const pivotPos = tiles[0].pos;
    const tAngle = Math.atan2(nextPos.z - pivotPos.z, nextPos.x - pivotPos.x);
    startAngle = tAngle + Math.PI; 
    setupNextOrbit();
    updatePositions();
    cameraTarget.copy(pivotSphere.position);
    updateCamera(true);
    particles.forEach(p => scene.remove(p.mesh));
    particles.length = 0;
    uiStart.style.display = 'none';
    uiGameOver.style.display = 'none';
    uiGame.style.display = 'block';
    countdownEl.style.display = 'none';
    if (countdownTimer) clearInterval(countdownTimer);
    if (currentLevelData.id !== 'hub') {
        gameState = 'countdown';
        let countdownValue = 3;
        countdownEl.innerText = countdownValue;
        countdownEl.style.display = 'block';
        countdownTimer = setInterval(() => {
            countdownValue--;
            if (countdownValue > 0) {
                countdownEl.innerText = countdownValue;
            } else {
                clearInterval(countdownTimer);
                countdownEl.style.display = 'none';
                gameState = 'playing';
                musicPlayer.start(bpm, currentLevelData.musicSeed);
            }
        }, 1000);
    } else {
        gameState = 'playing';
        musicPlayer.start(bpm, currentLevelData.musicSeed);
    }
}

function setupNextOrbit() {
    if (currentTileIndex >= tiles.length - 1) {
        if (currentLevelData && currentLevelData.id === 'hub') { loadLevel('hub'); } else { gameOver(true); }
        return;
    }
    const pivotPos = tiles[currentTileIndex].pos;
    const nextPos = tiles[currentTileIndex + 1].pos;
    targetAngle = Math.atan2(nextPos.z - pivotPos.z, nextPos.x - pivotPos.x);
    let diff = (targetAngle - startAngle) * orbitDir;
    diff = diff % (Math.PI * 2);
    if (diff <= 0) diff += Math.PI * 2;
    targetAccumulatedAngle = diff * orbitDir;
    if (tiles[currentTileIndex].branchPos) {
        const bPos = tiles[currentTileIndex].branchPos;
        let bTargetAngle = Math.atan2(bPos.z - pivotPos.z, bPos.x - pivotPos.x);
        let bDiff = (bTargetAngle - startAngle) * orbitDir;
        bDiff = bDiff % (Math.PI * 2);
        if (bDiff <= 0) bDiff += Math.PI * 2;
        branchTargetAccumulatedAngle = bDiff * orbitDir;
    } else { branchTargetAccumulatedAngle = null; }
    if (currentTileIndex > 0 && currentLevelData && currentLevelData.id === 'hub') {
        const backPos = tiles[currentTileIndex - 1].pos;
        let bkTargetAngle = Math.atan2(backPos.z - pivotPos.z, backPos.x - pivotPos.x);
        let bkDiff = (bkTargetAngle - startAngle) * orbitDir;
        bkDiff = bkDiff % (Math.PI * 2);
        if (bkDiff <= 0) bkDiff += Math.PI * 2;
        backTargetAccumulatedAngle = bkDiff * orbitDir;
    } else { backTargetAccumulatedAngle = null; }
    accumulatedAngle = 0;
}

function gameOver(isComplete = false) {
    gameState = 'gameover';
    uiGame.style.display = 'none';
    uiGameOver.style.display = 'block';
    const titleEl = uiGameOver.querySelector('h1.title');
    if (titleEl) {
        titleEl.innerText = isComplete ? 'Level Complete!' : 'Game Over';
        titleEl.style.color = isComplete ? '#88ff88' : '#ffffff';
    }
    finalScoreEl.innerText = score;
    musicPlayer.stop();
    if (countdownTimer) clearInterval(countdownTimer);
    countdownEl.style.display = 'none';
}

function handleInputEvent() {
    if (gameState === 'start' || gameState === 'gameover') { resetGameLogic(); return; }
    if (gameState === 'playing') {
        let rawMainDiff = (accumulatedAngle - targetAccumulatedAngle) % (Math.PI * 2);
        if (rawMainDiff > Math.PI) rawMainDiff -= Math.PI * 2;
        if (rawMainDiff < -Math.PI) rawMainDiff += Math.PI * 2;
        let mainDiff = Math.abs(rawMainDiff);
        let rawBranchDiff = 0;
        let branchDiff = Infinity;
        if (branchTargetAccumulatedAngle !== null) {
            rawBranchDiff = (accumulatedAngle - branchTargetAccumulatedAngle) % (Math.PI * 2);
            if (rawBranchDiff > Math.PI) rawBranchDiff -= Math.PI * 2;
            if (rawBranchDiff < -Math.PI) rawBranchDiff += Math.PI * 2;
            branchDiff = Math.abs(rawBranchDiff);
        }
        let backDiff = Infinity;
        if (backTargetAccumulatedAngle !== null) {
            let bkDiff = (accumulatedAngle - backTargetAccumulatedAngle) % (Math.PI * 2);
            if (bkDiff > Math.PI) bkDiff -= Math.PI * 2;
            if (bkDiff < -Math.PI) bkDiff += Math.PI * 2;
            backDiff = Math.abs(bkDiff);
        }
        if (mainDiff <= tolerance) {
            showJudgment(rawMainDiff);
            score += 10;
            scoreEl.innerText = score;
            const ev = currentLevelData.events && currentLevelData.events[currentTileIndex + 1];
            if (ev) {
                if (ev.type === 'twirl' || ev.twirl) { orbitDir *= -1; } 
                if (ev.type === 'speed' || ev.bpm !== undefined) { bpm = ev.bpm; angularVelocity = (bpm / 60) * Math.PI; } 
                if (ev.type === 'camera' || ev.angle !== undefined || ev.height !== undefined) {
                    targetCameraAngle = ev.angle !== undefined ? ev.angle : targetCameraAngle;
                    targetCameraHeight = ev.height !== undefined ? ev.height : targetCameraHeight;
                    targetCameraRadius = ev.radius !== undefined ? ev.radius : targetCameraRadius;
                }
            }
            const hitPos = tiles[currentTileIndex + 1].pos;
            startAngle = Math.atan2(pivotSphere.position.z - hitPos.z, pivotSphere.position.x - hitPos.x);
            currentTileIndex++;
            refreshTileMaterials();
            const temp = pivotSphere;
            pivotSphere = orbitSphere;
            orbitSphere = temp;
            setupNextOrbit();
        } else if (branchDiff <= tolerance) {
            showJudgment(rawBranchDiff);
            loadLevel(tiles[currentTileIndex].branchData.levelId);
        } else if (backDiff <= tolerance && accumulatedAngle > tolerance) {
            const hitPos = tiles[currentTileIndex - 1].pos;
            startAngle = Math.atan2(pivotSphere.position.z - hitPos.z, pivotSphere.position.x - hitPos.x);
            currentTileIndex--;
            refreshTileMaterials();
            const temp = pivotSphere;
            pivotSphere = orbitSphere;
            orbitSphere = temp;
            setupNextOrbit();
        } else {
            if (currentLevelData.id === 'hub') { } else { gameOver(); }
        }
    }
}

window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA' || e.key === 'a' || e.key === 'A') {
        const autoPlayToggle = document.getElementById('auto-play-toggle');
        if (autoPlayToggle) autoPlayToggle.checked = !autoPlayToggle.checked;
        return;
    }
    if (gameState === 'countdown') return;
    if (e.code === 'Escape' && currentLevelData.id !== 'hub') {
        musicPlayer.stop(); loadLevel('hub'); return;
    }
    handleInputEvent();
});

function showJudgment(rawDiff) {
    const el = document.getElementById('judgment-text');
    if (!el) return;
    let mainDiff = Math.abs(rawDiff);
    let isLate = (orbitDir === 1) ? (rawDiff > 0) : (rawDiff < 0);
    let text = ""; let color = "#ffffff";
    if (mainDiff < 0.1) { text = "Perfect"; color = "#ffdd55"; } 
    else if (mainDiff < 0.25) { text = isLate ? "L. Perfect" : "E. Perfect"; color = "#88ff88"; } 
    else { text = isLate ? "Late" : "Early"; color = "#ff5555"; }
    el.innerText = text;
    el.style.color = color;
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'translate(-50%, -50%) scale(1.2)';
    void el.offsetWidth;
    el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    el.style.opacity = '0';
    el.style.transform = 'translate(-50%, -100%) scale(1)';
}

function updatePositions() {
    const currentTile = tiles[currentTileIndex];
    const nextTile = tiles[currentTileIndex + 1];
    let progress = 0;
    if (targetAccumulatedAngle !== 0) {
        progress = Math.abs(accumulatedAngle / targetAccumulatedAngle);
        progress = Math.min(1, Math.max(0, progress));
    }
    const currentY = currentTile.pos.y;
    let targetY = currentY;
    if (nextTile) targetY = nextTile.pos.y;
    const smoothProgress = 0.5 - Math.cos(progress * Math.PI) * 0.5;
    const interpolatedY = currentY + (targetY - currentY) * smoothProgress;
    pivotSphere.position.copy(currentTile.pos);
    pivotSphere.position.y = currentY + tileSize * 0.35;
    const currentAbsoluteAngle = startAngle + accumulatedAngle;
    orbitSphere.position.x = pivotSphere.position.x + Math.cos(currentAbsoluteAngle) * tileSize;
    orbitSphere.position.z = pivotSphere.position.z + Math.sin(currentAbsoluteAngle) * tileSize;
    orbitSphere.position.y = interpolatedY + tileSize * 0.35;
}

function updateCamera(instant = false) {
    if (instant) {
        cameraTarget.copy(pivotSphere.position);
        currentCameraAngle = targetCameraAngle;
        currentCameraHeight = targetCameraHeight;
        currentCameraRadius = targetCameraRadius;
    } else {
        cameraTarget.lerp(pivotSphere.position, 0.1); 
        currentCameraAngle += (targetCameraAngle - currentCameraAngle) * 0.05;
        currentCameraHeight += (targetCameraHeight - currentCameraHeight) * 0.05;
        currentCameraRadius += (targetCameraRadius - currentCameraRadius) * 0.05;
    }
    const offset = new THREE.Vector3(
        Math.sin(currentCameraAngle) * currentCameraRadius,
        currentCameraHeight,
        Math.cos(currentCameraAngle) * currentCameraRadius
    );
    camera.position.copy(cameraTarget).add(offset);
    camera.lookAt(cameraTarget);
    dirLight.target.position.copy(cameraTarget);
    dirLight.position.copy(cameraTarget).add(new THREE.Vector3(10, 30, 10));
    dirLight.target.updateMatrixWorld();
    if (floor) { floor.position.x = cameraTarget.x; floor.position.z = cameraTarget.z; }
}

function updateLabels() {
    triggerLabels.forEach(label => {
        const vector = label.pos.clone();
        vector.y += 1.5; 
        vector.project(camera);
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (vector.y * -0.5 + 0.5) * window.innerHeight;
        if (vector.z > 1) { label.el.style.display = 'none'; } 
        else { label.el.style.display = 'block'; label.el.style.left = `${x}px`; label.el.style.top = `${y}px`; }
    });
}

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.1); 
    const autoPlayToggle = document.getElementById('auto-play-toggle');
    if (gameState === 'playing') {
        accumulatedAngle += angularVelocity * delta * orbitDir;
        updatePositions();
        if (autoPlayToggle && autoPlayToggle.checked) {
            let aiMainDiff = (accumulatedAngle - targetAccumulatedAngle) % (Math.PI * 2);
            if (aiMainDiff > Math.PI) aiMainDiff -= Math.PI * 2;
            if (aiMainDiff < -Math.PI) aiMainDiff += Math.PI * 2;
            const step = angularVelocity * delta * orbitDir;
            const prevAngle = accumulatedAngle - step;
            let crossed = false;
            if (orbitDir === 1) { if (prevAngle <= targetAccumulatedAngle && accumulatedAngle >= targetAccumulatedAngle) crossed = true; } 
            else { if (prevAngle >= targetAccumulatedAngle && accumulatedAngle <= targetAccumulatedAngle) crossed = true; }
            if (crossed || Math.abs(aiMainDiff) < 0.02) { 
                accumulatedAngle = targetAccumulatedAngle; // Force perfect hit
                handleInputEvent(); 
            }
        }
        spawnParticle(orbitSphere.position, orbitSphere === fireSphere);
        updateParticles(delta);
        if (currentLevelData.id !== 'hub') {
            for (let i = 0; i < currentTileIndex - 1; i++) {
                const t = tiles[i];
                if (!t || t.isDeleted) continue;
                if (t.mesh.position.y > t.pos.y - 20) {
                    t.mesh.position.y -= delta * 15;
                    if (t.trackMesh) { t.trackMesh.position.y -= delta * 15; }
                } else {
                    scene.remove(t.mesh);
                    if (t.branchMesh) scene.remove(t.branchMesh);
                    if (t.trackMesh) scene.remove(t.trackMesh);
                    t.isDeleted = true;
                }
            }
            tiles.forEach(t => {
                if (t.gimmickMesh && !t.isDeleted) {
                    t.gimmickMesh.rotation.z += delta * 3;
                }
            });
        }
        const speedFactor = Math.min(1, Math.max(0, (bpm - 120) / 180));
        scene.background.lerpColors(new THREE.Color(0x0f0f15), new THREE.Color(0x250f15), speedFactor);
        updateCamera();
        updateLabels();
        let isPastTarget = false;
        if (orbitDir === 1) {
            let maxTarget = Math.max(targetAccumulatedAngle, branchTargetAccumulatedAngle !== null ? branchTargetAccumulatedAngle : -Infinity);
            if (accumulatedAngle > maxTarget + tolerance) isPastTarget = true;
        } else {
            let minTarget = Math.min(targetAccumulatedAngle, branchTargetAccumulatedAngle !== null ? branchTargetAccumulatedAngle : Infinity);
            if (accumulatedAngle < minTarget - tolerance) isPastTarget = true;
        }
        if (gameState === 'playing' && currentLevelData.id !== 'hub' && isPastTarget) { gameOver(); }
    } else if (gameState === 'countdown') {
        updatePositions(); updateCamera(true); updateLabels();
    } else if (gameState === 'start') {
        const time = clock.getElapsedTime();
        fireSphere.position.y = tileSize * 0.35 + Math.sin(time * 3) * 0.3;
        iceSphere.position.y = tileSize * 0.35 + Math.cos(time * 3) * 0.3;
        cameraTarget.set(0,0,0); updateCamera(true); updateLabels();
    }
    renderer.render(scene, camera);
}

loadLevel('hub');
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


