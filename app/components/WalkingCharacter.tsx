"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Character() {
  const groupRef = useRef<THREE.Group>(null!);
  const leftLegRef = useRef<THREE.Mesh>(null!);
  const rightLegRef = useRef<THREE.Mesh>(null!);
  const leftArmRef = useRef<THREE.Mesh>(null!);
  const rightArmRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Walking animation
    if (leftLegRef.current && rightLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * 2) * 0.5;
      rightLegRef.current.rotation.x = Math.sin(t * 2 + Math.PI) * 0.5;
    }

    // Arms swinging
    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * 2 + Math.PI) * 0.4;
      rightArmRef.current.rotation.x = Math.sin(t * 2) * 0.4;
    }

    // Body bobbing
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 4) * 0.1;
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.8, 0.3]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Left Arm */}
      <mesh ref={leftArmRef} position={[-0.35, 0.6, 0]}>
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Right Arm */}
      <mesh ref={rightArmRef} position={[0.35, 0.6, 0]}>
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Left Leg */}
      <mesh ref={leftLegRef} position={[-0.15, -0.2, 0]}>
        <boxGeometry args={[0.18, 0.8, 0.18]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Right Leg */}
      <mesh ref={rightLegRef} position={[0.15, -0.2, 0]}>
        <boxGeometry args={[0.18, 0.8, 0.18]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

export default function WalkingCharacter() {
  return (
    <div className="absolute right-0 md:right-10 bottom-0 h-[400px] w-[300px] md:w-[400px] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#a855f7" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#06b6d4" />
          <spotLight
            position={[0, 5, 3]}
            intensity={1}
            angle={0.6}
            penumbra={1}
            color="#8b5cf6"
          />
          <Character />
        </Suspense>
      </Canvas>
    </div>
  );
}
