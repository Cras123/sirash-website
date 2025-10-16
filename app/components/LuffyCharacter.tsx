"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function LuffyAvatar() {
  const groupRef = useRef<THREE.Group>(null!);
  const leftLegRef = useRef<THREE.Group>(null!);
  const rightLegRef = useRef<THREE.Group>(null!);
  const leftArmRef = useRef<THREE.Group>(null!);
  const rightArmRef = useRef<THREE.Group>(null!);
  const bodyRef = useRef<THREE.Group>(null!);
  const headRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Luffy's energetic walking
    if (leftLegRef.current && rightLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * 3.5) * 0.8;
      rightLegRef.current.rotation.x = Math.sin(t * 3.5 + Math.PI) * 0.8;
    }

    // Dynamic arm swinging
    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * 3.5 + Math.PI) * 0.7;
      leftArmRef.current.rotation.z = Math.sin(t * 2) * 0.2;
      rightArmRef.current.rotation.x = Math.sin(t * 3.5) * 0.7;
      rightArmRef.current.rotation.z = -Math.sin(t * 2) * 0.2;
    }

    // Body bounce
    if (bodyRef.current) {
      bodyRef.current.position.y = Math.abs(Math.sin(t * 7)) * 0.18;
    }

    // Head movements
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 1.2) * 0.15;
      headRef.current.position.y = Math.sin(t * 7) * 0.06;
    }

    // Overall sway
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.4 + Math.PI * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]} scale={1.4}>
      {/* HEAD */}
      <group ref={headRef} position={[0, 1.6, 0]}>
        {/* Face - anime proportions */}
        <mesh castShadow>
          <sphereGeometry args={[0.38, 64, 64]} />
          <meshToonMaterial color="#ffc69f" gradientMap={null} />
        </mesh>

        {/* Black hair spikes */}
        <mesh position={[0, 0.2, -0.3]} rotation={[0.4, 0, 0]}>
          <coneGeometry args={[0.18, 0.25, 8]} />
          <meshToonMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[-0.18, 0.15, -0.25]} rotation={[0.3, 0.4, 0]}>
          <coneGeometry args={[0.15, 0.22, 8]} />
          <meshToonMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.18, 0.15, -0.25]} rotation={[0.3, -0.4, 0]}>
          <coneGeometry args={[0.15, 0.22, 8]} />
          <meshToonMaterial color="#1a1a1a" />
        </mesh>

        {/* Eyes - big anime style */}
        <group position={[0, 0.08, 0.35]}>
          {/* Left eye white */}
          <mesh position={[-0.14, 0, 0]}>
            <circleGeometry args={[0.08, 32]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          {/* Left pupil */}
          <mesh position={[-0.14, -0.01, 0.01]}>
            <circleGeometry args={[0.05, 32]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          {/* Left shine */}
          <mesh position={[-0.12, 0.02, 0.02]}>
            <circleGeometry args={[0.02, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>

          {/* Right eye white */}
          <mesh position={[0.14, 0, 0]}>
            <circleGeometry args={[0.08, 32]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          {/* Right pupil */}
          <mesh position={[0.14, -0.01, 0.01]}>
            <circleGeometry args={[0.05, 32]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          {/* Right shine */}
          <mesh position={[0.16, 0.02, 0.02]}>
            <circleGeometry args={[0.02, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Big smile */}
        <mesh position={[0, -0.1, 0.36]}>
          <torusGeometry args={[0.18, 0.03, 16, 48, Math.PI]} />
          <meshToonMaterial color="#000000" />
        </mesh>

        {/* Mouth inside */}
        <mesh position={[0, -0.12, 0.35]}>
          <sphereGeometry
            args={[0.15, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]}
          />
          <meshToonMaterial color="#ff6b6b" />
        </mesh>

        {/* Teeth */}
        {[-0.08, -0.04, 0, 0.04, 0.08].map((x, i) => (
          <mesh key={i} position={[x, -0.08, 0.36]}>
            <boxGeometry args={[0.03, 0.04, 0.02]} />
            <meshToonMaterial color="#ffffff" />
          </mesh>
        ))}

        {/* Scar under left eye - ICONIC */}
        <group position={[-0.14, -0.03, 0.35]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.025, 0.15, 0.01]} />
            <meshToonMaterial color="#e39999" />
          </mesh>
        </group>

        {/* Nose - small anime nose */}
        <mesh position={[0, 0, 0.38]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshToonMaterial color="#ffb88c" />
        </mesh>

        {/* STRAW HAT */}
        <group position={[0, 0.32, 0]} rotation={[-0.12, 0, 0]}>
          {/* Hat brim */}
          <mesh castShadow>
            <cylinderGeometry args={[0.55, 0.58, 0.05, 64]} />
            <meshToonMaterial color="#e8d5b7" />
          </mesh>
          {/* Hat crown */}
          <mesh position={[0, 0.22, 0]} castShadow>
            <cylinderGeometry args={[0.32, 0.38, 0.4, 64]} />
            <meshToonMaterial color="#e8d5b7" />
          </mesh>
          {/* Red ribbon */}
          <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.39, 0.39, 0.1, 64]} />
            <meshToonMaterial color="#e63946" />
          </mesh>
          {/* Ribbon knot */}
          <mesh position={[0, 0.1, 0.39]}>
            <boxGeometry args={[0.14, 0.09, 0.09]} />
            <meshToonMaterial color="#e63946" />
          </mesh>
          <mesh position={[-0.06, 0.1, 0.42]} rotation={[0, 0.3, 0]}>
            <boxGeometry args={[0.06, 0.08, 0.12]} />
            <meshToonMaterial color="#e63946" />
          </mesh>
          <mesh position={[0.06, 0.1, 0.42]} rotation={[0, -0.3, 0]}>
            <boxGeometry args={[0.06, 0.08, 0.12]} />
            <meshToonMaterial color="#e63946" />
          </mesh>
        </group>
      </group>

      {/* BODY */}
      <group ref={bodyRef} position={[0, 0, 0]}>
        {/* Neck */}
        <mesh position={[0, 1.25, 0]}>
          <cylinderGeometry args={[0.14, 0.16, 0.2, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>

        {/* Torso - Red vest */}
        <mesh position={[0, 0.8, 0]} castShadow>
          <boxGeometry args={[0.65, 0.75, 0.4]} />
          <meshToonMaterial color="#e63946" />
        </mesh>

        {/* Open vest - show skin */}
        <mesh position={[0, 0.8, 0.18]}>
          <boxGeometry args={[0.35, 0.7, 0.05]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>

        {/* Chest definition */}
        <mesh position={[-0.12, 0.9, 0.18]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0.12, 0.9, 0.18]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>

        {/* Yellow sash */}
        <mesh position={[0, 0.4, 0]} castShadow>
          <cylinderGeometry args={[0.35, 0.37, 0.16, 64]} />
          <meshToonMaterial color="#ffd60a" />
        </mesh>

        {/* Belt buckle */}
        <mesh position={[0, 0.4, 0.36]}>
          <boxGeometry args={[0.1, 0.12, 0.04]} />
          <meshStandardMaterial
            color="#c9a020"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>

        {/* Blue shorts */}
        <mesh position={[0, 0.08, 0]} castShadow>
          <boxGeometry args={[0.7, 0.45, 0.42]} />
          <meshToonMaterial color="#457b9d" />
        </mesh>
      </group>

      {/* LEFT ARM */}
      <group ref={leftArmRef} position={[-0.45, 0.95, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.13, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.25, 0]} castShadow>
          <capsuleGeometry args={[0.12, 0.4, 16, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.48, 0]}>
          <sphereGeometry args={[0.11, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.72, 0]} castShadow>
          <capsuleGeometry args={[0.105, 0.38, 16, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        {/* Hand - fist */}
        <mesh position={[0, -0.95, 0]} castShadow>
          <boxGeometry args={[0.14, 0.18, 0.14]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
      </group>

      {/* RIGHT ARM */}
      <group ref={rightArmRef} position={[0.45, 0.95, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.13, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.25, 0]} castShadow>
          <capsuleGeometry args={[0.12, 0.4, 16, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.48, 0]}>
          <sphereGeometry args={[0.11, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.72, 0]} castShadow>
          <capsuleGeometry args={[0.105, 0.38, 16, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        {/* Hand - fist */}
        <mesh position={[0, -0.95, 0]} castShadow>
          <boxGeometry args={[0.14, 0.18, 0.14]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
      </group>

      {/* LEFT LEG */}
      <group ref={leftLegRef} position={[-0.2, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.14, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.32, 0]} castShadow>
          <capsuleGeometry args={[0.14, 0.5, 16, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.13, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.92, 0]} castShadow>
          <capsuleGeometry args={[0.12, 0.5, 16, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        {/* Sandal */}
        <mesh position={[0, -1.22, 0.1]} castShadow>
          <boxGeometry args={[0.2, 0.08, 0.35]} />
          <meshToonMaterial color="#8b4513" />
        </mesh>
        <mesh position={[0, -1.17, 0.1]}>
          <boxGeometry args={[0.22, 0.04, 0.06]} />
          <meshToonMaterial color="#654321" />
        </mesh>
      </group>

      {/* RIGHT LEG */}
      <group ref={rightLegRef} position={[0.2, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.14, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.32, 0]} castShadow>
          <capsuleGeometry args={[0.14, 0.5, 16, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.13, 32, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        <mesh position={[0, -0.92, 0]} castShadow>
          <capsuleGeometry args={[0.12, 0.5, 16, 32]} />
          <meshToonMaterial color="#ffc69f" />
        </mesh>
        {/* Sandal */}
        <mesh position={[0, -1.22, 0.1]} castShadow>
          <boxGeometry args={[0.2, 0.08, 0.35]} />
          <meshToonMaterial color="#8b4513" />
        </mesh>
        <mesh position={[0, -1.17, 0.1]}>
          <boxGeometry args={[0.22, 0.04, 0.06]} />
          <meshToonMaterial color="#654321" />
        </mesh>
      </group>
    </group>
  );
}

export default function LuffyCharacter() {
  return (
    <div className="absolute right-0 md:right-10 bottom-0 h-[550px] w-[450px] md:w-[550px] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0.5, 6], fov: 42 }}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Anime-style lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[8, 10, 6]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-5, 5, 5]} intensity={0.6} color="#ffe066" />
          <pointLight position={[5, 0, -3]} intensity={0.4} color="#4da3ff" />
          <hemisphereLight
            intensity={0.5}
            color="#ffffff"
            groundColor="#444444"
          />
          <LuffyAvatar />
        </Suspense>
      </Canvas>
    </div>
  );
}
