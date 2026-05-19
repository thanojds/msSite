import { useEffect, useRef, useState, useMemo} from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, Environment } from '@react-three/drei';
import { gsap } from 'gsap';

// --- 3D MOVING GRID BACKGROUND COMPONENT ---
function GridBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
 
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 3 + Math.sin(time * 0.1) * 0.05;
      meshRef.current.position.y = Math.cos(time * 0.2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, -2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[30, 30, 40, 40]} />
      <meshStandardMaterial
        color="#081E36"
        wireframe={true}
        emissive="#06B6D4"
        emissiveIntensity={0.4}
        roughness={0.5}
      />
    </mesh>
  );
}

// --- 3D ROTATING CUSTOM TEXT COMPONENT (RESPONSIVE + ANIMATED) ---
function Micron3DText() {
  const groupRef = useRef<THREE.Group>(null);
  const mainTextGroupRef =  useRef<THREE.Group>(null);
  
  const line1Refs = useRef<(THREE.Group | null)[]>([]);
  const line2Refs = useRef<(THREE.Group | null)[]>([]);
  
  const [widths1, setWidths1] = useState<Record<number, number>>({});
  const [widths2, setWidths2] = useState<Record<number, number>>({});

  
  const { size: viewportSize, camera } = useThree();
  const isMobile = viewportSize.width < 768;
  const isTablet = viewportSize.width >= 768 && viewportSize.width < 1024;

  
  const fontScale = isMobile ? 0.6 : isTablet ? 0.8 : 1;
  const sizeLine1 = 0.9 * fontScale;
  const sizeLine2 = 0.5 * fontScale;
  
 
  const yLine1 = isMobile ? 0.25 : 0.4;
  const yLine2 = isMobile ? -0.4 : -0.6;


  useEffect(() => {
    if (isMobile) {
      camera.position.z = 8.5; 
    } else if (isTablet) {
      camera.position.z = 7.5;
    } else {
      camera.position.z = 6.5; 
    }
    camera.updateProjectionMatrix();
  }, [isMobile, isTablet, camera]);

  const line1Text = "Micronsoft".split("");
  const line2Text = "Solutions (PVT) LTD".split("");

  const totalLetters = line1Text.length + line2Text.filter(c => c !== " ").length;
  const measuredCount = Object.keys(widths1).length + Object.keys(widths2).length;

  const micronsoftMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#38BDF8"),
    emissive: new THREE.Color("#0284C7"),
    roughness: 0.1,
    metalness: 0.8,
  }), []);

  const solutionsMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#FFFFFF"),
    emissive: new THREE.Color("#475569"),
    roughness: 0.2,
    metalness: 0.5,
  }), []);

  // --- 💡 Wave Animation with Responsive Values ---
  useEffect(() => {
    if (measuredCount >= totalLetters && mainTextGroupRef.current) {
      gsap.to(mainTextGroupRef.current.position, { opacity: 1, duration: 0 });

      // LINE 1 Animation
      line1Refs.current.forEach((letterGroup, index) => {
        if (letterGroup) {
          gsap.fromTo(letterGroup.position, 
            { y: 0 }, 
            { 
              y: isMobile ? 0.9 : 1.5, 
              duration: 0.4, 
              ease: "power2.out", 
              delay: index * 0.06, 
              onComplete: () => {
                gsap.to(letterGroup.position, { y: 0, duration: 1.0, ease: "bounce.out" });
              }
            }
          );
        }
      });

      // LINE 2 Animation
      line2Refs.current.forEach((letterGroup, index) => {
        if (letterGroup) {
          gsap.fromTo(letterGroup.position, 
            { y: 0 }, 
            { 
              y: isMobile ? 0.7 : 1.2, 
              duration: 0.4, 
              ease: "power2.out", 
              delay: 0.3 + (index * 0.04), 
              onComplete: () => {
                gsap.to(letterGroup.position, { y: 0, duration: 1.0, ease: "bounce.out" });
              }
            }
          );
        }
      });
    }
  }, [widths1, widths2, measuredCount, totalLetters, isMobile]);

  // Mouse/Gyro Rotation
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.2;
    groupRef.current.rotation.x = state.mouse.y * 0.15;        
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;  
  });

  const handleUpdate = (mesh: THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes, THREE.BufferGeometryEventMap>, THREE.Material<THREE.MaterialEventMap> | THREE.Material<THREE.MaterialEventMap>[], THREE.Object3DEventMap>, index: number, isLine2: boolean) => {
    if (!mesh) return;
    mesh.geometry.computeBoundingBox();
    if (!mesh.geometry.boundingBox) return;
    const width = mesh.geometry.boundingBox.max.x - mesh.geometry.boundingBox.min.x;
    
    if (isLine2) {
      if (widths2[index] !== width) setWidths2(prev => ({ ...prev, [index]: width }));
    } else {
      if (widths1[index] !== width) setWidths1(prev => ({ ...prev, [index]: width }));
    }
  };

  // --- 📏 LINE 1 Responsive Layout ---
  let totalWidth1 = 0;
  const defaultW1 = 0.6 * fontScale;
  const spacing1 = 0.05 * fontScale;

  line1Text.forEach((_char, i) => {
    totalWidth1 += (widths1[i] || defaultW1) + spacing1;
  });
  const offset1 = -totalWidth1 / 2;

  let currentX1 = 0;
  const line1Elements = line1Text.map((char, i) => {
    const xPos = offset1 + currentX1;
    const w = widths1[i] || defaultW1;
    currentX1 += w + spacing1;

    return (
      <group key={i} position={[xPos, 0, 0]} ref={(el) => { line1Refs.current[i] = el; }}>
        <Text3D
          onUpdate={(mesh) => handleUpdate(mesh, i, false)}
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={sizeLine1} height={0.25 * fontScale} curveSegments={12} bevelEnabled bevelThickness={0.02 * fontScale} bevelSize={0.02 * fontScale} material={micronsoftMaterial}
        >
          {char}
        </Text3D>
      </group>
    );
  });

  // --- 📏 LINE 2 Responsive Layout ---
  let totalWidth2 = 0;
  const defaultW2 = 0.4 * fontScale;
  const spacing2 = 0.03 * fontScale;
  const spaceCharWidth = 0.35 * fontScale;

  line2Text.forEach((char, i) => {
    if (char === " ") {
      totalWidth2 += spaceCharWidth;
    } else {
      totalWidth2 += (widths2[i] || defaultW2) + spacing2;
    }
  });
  const offset2 = -totalWidth2 / 2;

  let currentX2 = 0;
  const line2Elements = line2Text.map((char, i) => {
    if (char === " ") {
      currentX2 += spaceCharWidth;
      return null;
    }
    const xPos = offset2 + currentX2;
    const w = widths2[i] || defaultW2;
    currentX2 += w + spacing2;

    return (
      <group key={i} position={[xPos, 0, 0]} ref={(el) => (line2Refs.current[i] = el)}>
        <Text3D
          onUpdate={(mesh) => handleUpdate(mesh, i, true)}
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={sizeLine2} height={0.15 * fontScale} curveSegments={12} bevelEnabled bevelThickness={0.01 * fontScale} bevelSize={0.01 * fontScale} material={solutionsMaterial}
        >
          {char}
        </Text3D>
      </group>
    );
  });

  return (
    <group ref={groupRef}>
      <group ref={mainTextGroupRef} visible={measuredCount >= totalLetters}>
        <group position={[0, yLine1, 0]}>
          {line1Elements}
        </group>
        <group position={[0, yLine2, 0]}>
          {line2Elements}
        </group>
      </group>
    </group>
  );
}

export default function Loading() {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center bg-[#060913] px-4 md:px-6 overflow-hidden border-b border-slate-950">
       
      <div className="absolute inset-0 z-0 w-full h-full">
      
        <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }} resize={{ scroll: false }}>
          <color attach="background" args={['#060913']} />

          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#06B6D4" />
          <directionalLight position={[0, 4, 3]} intensity={1.5} color="#ffffff" />
           
          <Environment preset="night" />
           
          <GridBackground />
          <Micron3DText />
        </Canvas>
      </div>
       
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060913]/10 to-[#060913] pointer-events-none"></div>
    </section>
  );

}