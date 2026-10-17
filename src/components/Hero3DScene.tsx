import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Sliders, Eye, EyeOff, Sparkles, RotateCw } from 'lucide-react';

// Pre-allocated math variables to avoid GC allocations in the render loop
const _targetRotation = new THREE.Vector2(0, 0);
const _currentRotation = new THREE.Vector2(0, 0);

type FinishMode = 'chrome' | 'neon' | 'obsidian' | 'matrix';

export const Hero3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [finish, setFinish] = useState<FinishMode>('chrome');
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // References to dynamically mutate materials without re-rendering canvas
  const materialsRef = useRef<{
    outerRing?: THREE.MeshStandardMaterial;
    midRing?: THREE.MeshStandardMaterial;
    innerRing?: THREE.MeshStandardMaterial;
    crystalCore?: THREE.MeshPhysicalMaterial;
    energyCore?: THREE.MeshStandardMaterial;
    satellites?: THREE.MeshStandardMaterial;
    particles?: THREE.PointsMaterial;
  }>({});

  const speedRef = useRef(1);
  speedRef.current = rotationSpeed;

  const wireframeRef = useRef(false);
  wireframeRef.current = wireframe;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
      return;
    }

    let animationFrameId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Renderer
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 5.2);

    // 3. Procedural Studio Environment (RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();

    // 4. Studio Lighting Rig
    const hemiLight = new THREE.HemisphereLight(0x00e5ff, 0x080b18, 1.2);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0x3867ff, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff3cac, 3.0);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const cyanSpot = new THREE.PointLight(0x00e5ff, 3.5, 10);
    cyanSpot.position.set(0, 0, 1.5);
    scene.add(cyanSpot);

    // 5. Composite 3D Sculpture (THREE.Group with 8 parts)
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials Setup
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      metalness: 0.95,
      roughness: 0.15,
      wireframe: false,
    });

    const midRingMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });

    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xff3cac,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });

    const crystalCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0xf8fafc,
      metalness: 0.1,
      roughness: 0.08,
      transmission: 0.9,
      ior: 1.58,
      thickness: 1.4,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });

    const energyCoreMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 2.2,
      roughness: 0.1,
      metalness: 0.8,
    });

    const satelliteMat = new THREE.MeshStandardMaterial({
      color: 0xff3cac,
      metalness: 0.95,
      roughness: 0.1,
      emissive: 0x3867ff,
      emissiveIntensity: 0.5,
    });

    // Save in ref for live tweaking
    materialsRef.current = {
      outerRing: outerRingMat,
      midRing: midRingMat,
      innerRing: innerRingMat,
      crystalCore: crystalCoreMat,
      energyCore: energyCoreMat,
      satellites: satelliteMat,
    };

    // Part 1: Outer Gyroscopic Ring
    const outerTorusGeo = new THREE.TorusGeometry(1.65, 0.035, 32, 100);
    const outerRing = new THREE.Mesh(outerTorusGeo, outerRingMat);
    mainGroup.add(outerRing);

    // Part 2: Middle Inclined Gyroscopic Ring
    const midTorusGeo = new THREE.TorusGeometry(1.35, 0.03, 32, 100);
    const midRing = new THREE.Mesh(midTorusGeo, midRingMat);
    midRing.rotation.x = Math.PI / 3;
    mainGroup.add(midRing);

    // Part 3: Inner Gyroscopic Ring
    const innerTorusGeo = new THREE.TorusGeometry(1.05, 0.025, 32, 100);
    const innerRing = new THREE.Mesh(innerTorusGeo, innerRingMat);
    innerRing.rotation.y = Math.PI / 4;
    mainGroup.add(innerRing);

    // Part 4: Faceted Geometric Crystal Core (Icosahedron)
    const crystalGeo = new THREE.IcosahedronGeometry(0.68, 0);
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalCoreMat);
    mainGroup.add(crystalMesh);

    // Part 5: Inner Glowing Energy Sphere
    const energyGeo = new THREE.SphereGeometry(0.25, 32, 32);
    const energyMesh = new THREE.Mesh(energyGeo, energyCoreMat);
    mainGroup.add(energyMesh);

    // Part 6 & 7: Orbiting Satellite Prisms
    const satelliteGroup = new THREE.Group();
    mainGroup.add(satelliteGroup);
    const satGeo = new THREE.OctahedronGeometry(0.12, 0);
    const numSatellites = 4;
    for (let i = 0; i < numSatellites; i++) {
      const satMesh = new THREE.Mesh(satGeo, satelliteMat);
      const angle = (i / numSatellites) * Math.PI * 2;
      const radius = 1.95;
      satMesh.position.set(Math.cos(angle) * radius, (Math.sin(angle * 2) * 0.3), Math.sin(angle) * radius);
      satelliteGroup.add(satMesh);
    }

    // Part 8: Orbiting Cosmic Starfield / Cyber Dust
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const colorCyan = new THREE.Color('#00E5FF');
    const colorPurple = new THREE.Color('#8B5CF6');
    const colorMagenta = new THREE.Color('#FF3CAC');

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spherical distribution
      const r = 2.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = r * Math.cos(phi);

      const mixedColor = Math.random() > 0.6 ? colorMagenta : (Math.random() > 0.3 ? colorCyan : colorPurple);
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Soft Radial Ground Contact Shadow Plane
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const shadowCtx = shadowCanvas.getContext('2d');
    if (shadowCtx) {
      const gradient = shadowCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.35)');
      gradient.addColorStop(0.4, 'rgba(139, 92, 246, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      shadowCtx.fillStyle = gradient;
      shadowCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(4, 4);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.5,
      depthWrite: false
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -2.1;
    scene.add(shadowPlane);

    // Warm-up compilation
    renderer.compile(scene, camera);

    // 6. Pointer & Parallax Interaction
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      _targetRotation.x = y * 0.45;
      _targetRotation.y = x * 0.65;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 8. Animation Loop with Exponential Damping
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const speed = speedRef.current;

      // Apply wireframe dynamically
      outerRingMat.wireframe = wireframeRef.current;
      midRingMat.wireframe = wireframeRef.current;
      innerRingMat.wireframe = wireframeRef.current;
      crystalCoreMat.wireframe = wireframeRef.current;

      // Smooth mouse parallax damping
      _currentRotation.x = THREE.MathUtils.damp(_currentRotation.x, _targetRotation.x, 3.5, delta);
      _currentRotation.y = THREE.MathUtils.damp(_currentRotation.y, _targetRotation.y, 3.5, delta);

      mainGroup.rotation.x = _currentRotation.x;
      mainGroup.rotation.y = _currentRotation.y;

      // Kinematic Rotations
      outerRing.rotation.z += 0.4 * delta * speed;
      outerRing.rotation.x += 0.25 * delta * speed;

      midRing.rotation.y += 0.5 * delta * speed;
      midRing.rotation.z -= 0.3 * delta * speed;

      innerRing.rotation.x += 0.6 * delta * speed;
      innerRing.rotation.y -= 0.4 * delta * speed;

      crystalMesh.rotation.y += 0.35 * delta * speed;
      crystalMesh.rotation.x += 0.2 * delta * speed;

      satelliteGroup.rotation.y -= 0.6 * delta * speed;
      satelliteGroup.rotation.z += 0.2 * delta * speed;

      particles.rotation.y += 0.12 * delta * speed;

      // Subtle breath pulsing on energy core
      const elapsed = clock.getElapsedTime();
      const pulse = 1 + Math.sin(elapsed * 2.5) * 0.12;
      energyMesh.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      // Dispose resources
      outerTorusGeo.dispose();
      midTorusGeo.dispose();
      innerTorusGeo.dispose();
      crystalGeo.dispose();
      energyGeo.dispose();
      satGeo.dispose();
      particleGeo.dispose();
      shadowGeo.dispose();

      outerRingMat.dispose();
      midRingMat.dispose();
      innerRingMat.dispose();
      crystalCoreMat.dispose();
      energyCoreMat.dispose();
      satelliteMat.dispose();
      particleMat.dispose();
      shadowMat.dispose();
      shadowTexture.dispose();
      envTexture.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update Finishes on materialsRef
  const handleFinishChange = (newFinish: FinishMode) => {
    setFinish(newFinish);
    const mats = materialsRef.current;
    if (!mats.outerRing || !mats.crystalCore) return;

    switch (newFinish) {
      case 'chrome':
        mats.outerRing.color.set('#00E5FF');
        mats.midRing?.color.set('#8B5CF6');
        mats.innerRing?.color.set('#FF3CAC');
        mats.crystalCore.color.set('#FFFFFF');
        mats.crystalCore.roughness = 0.08;
        mats.crystalCore.metalness = 0.15;
        mats.crystalCore.transmission = 0.9;
        mats.energyCore?.color.set('#00E5FF');
        mats.energyCore?.emissive.set('#00E5FF');
        break;
      case 'neon':
        mats.outerRing.color.set('#FF3CAC');
        mats.midRing?.color.set('#00E5FF');
        mats.innerRing?.color.set('#FF9F43');
        mats.crystalCore.color.set('#FF3CAC');
        mats.crystalCore.roughness = 0.05;
        mats.crystalCore.metalness = 0.3;
        mats.crystalCore.transmission = 0.8;
        mats.energyCore?.color.set('#FF3CAC');
        mats.energyCore?.emissive.set('#FF3CAC');
        break;
      case 'obsidian':
        mats.outerRing.color.set('#1E293B');
        mats.midRing?.color.set('#334155');
        mats.innerRing?.color.set('#64748B');
        mats.crystalCore.color.set('#0F172A');
        mats.crystalCore.roughness = 0.15;
        mats.crystalCore.metalness = 0.95;
        mats.crystalCore.transmission = 0.4;
        mats.energyCore?.color.set('#3867FF');
        mats.energyCore?.emissive.set('#3867FF');
        break;
      case 'matrix':
        mats.outerRing.color.set('#10B981');
        mats.midRing?.color.set('#059669');
        mats.innerRing?.color.set('#34D399');
        mats.crystalCore.color.set('#10B981');
        mats.crystalCore.roughness = 0.1;
        mats.crystalCore.metalness = 0.4;
        mats.crystalCore.transmission = 0.85;
        mats.energyCore?.color.set('#10B981');
        mats.energyCore?.emissive.set('#10B981');
        break;
    }
  };

  return (
    <div
      className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Three.js Isolated Canvas Mount (Zero backdrop-filter over canvas) */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Fallback if WebGL is unavailable */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="w-48 h-48 rounded-full border-2 border-[#00E5FF] animate-spin border-t-transparent flex items-center justify-center cyber-glow-cyan">
            <div className="w-32 h-32 rounded-full border-2 border-[#8B5CF6] border-b-transparent animate-reverse-spin flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-[#FF3CAC]" />
            </div>
          </div>
          <p className="mt-4 text-xs font-mono text-cyan-300">INTERACTIVE 3D COMPATIBILITY MODE</p>
        </div>
      )}

      {/* Three.js Directive Compliant Ergonomic Collapsible Bottom Control Dock */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-auto max-w-[94vw] transition-all duration-300">
        {/* Toggle Dock Button */}
        <div className="flex justify-center mb-1">
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="px-3 py-1 text-[11px] font-mono tracking-wider text-slate-400 hover:text-cyan-300 bg-[#080B18]/85 border border-[#00E5FF]/20 rounded-t-lg transition-colors flex items-center gap-1.5 shadow-lg"
          >
            {isCollapsed ? <Eye className="w-3 h-3 text-[#00E5FF]" /> : <EyeOff className="w-3 h-3 text-slate-400" />}
            <span>{isCollapsed ? 'Show 3D Controls' : 'Zen View'}</span>
          </button>
        </div>

        {/* Collapsible Dock Contents */}
        {!isCollapsed && (
          <div className="bg-[#080B18]/90 border border-[#00E5FF]/25 rounded-2xl px-3.5 py-2.5 shadow-2xl flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs">
            {/* Finish Selector */}
            <div className="flex items-center gap-1.5 border-r border-slate-700/60 pr-2 sm:pr-3">
              <span className="text-[10px] font-mono text-slate-400 uppercase hidden sm:inline">Finish:</span>
              <div className="flex gap-1">
                {(['chrome', 'neon', 'obsidian', 'matrix'] as FinishMode[]).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => handleFinishChange(f)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono capitalize transition-all ${
                      finish === f
                        ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/50 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 border border-transparent'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Wireframe Toggle */}
            <button
              type="button"
              onClick={() => setWireframe(!wireframe)}
              className={`px-2 py-1 rounded text-[11px] font-mono transition-all flex items-center gap-1 border ${
                wireframe
                  ? 'bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/50'
                  : 'text-slate-400 hover:text-slate-200 border-slate-700/60'
              }`}
            >
              <Sliders className="w-3 h-3" />
              <span>Wireframe: {wireframe ? 'ON' : 'OFF'}</span>
            </button>

            {/* Rotation Speed Toggle */}
            <button
              type="button"
              onClick={() => {
                setRotationSpeed((prev) => (prev === 1 ? 1.8 : prev === 1.8 ? 0.3 : 1));
              }}
              className="px-2 py-1 rounded text-[11px] font-mono text-slate-400 hover:text-slate-200 border border-slate-700/60 transition-all flex items-center gap-1"
            >
              <RotateCw className="w-3 h-3 text-[#FF9F43]" />
              <span>Speed: {rotationSpeed === 1 ? '1x' : rotationSpeed === 1.8 ? '2x' : '0.5x'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Minimal Top-Right 3D Indicator (Clean, Static - No pulsing dots) */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#080B18]/70 border border-cyan-500/20 text-[11px] font-mono text-slate-300">
        <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
        <span>THREE.JS PBR ENGINE</span>
      </div>
    </div>
  );
};
