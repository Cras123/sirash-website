"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Float, Text3D, Center } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function FloatingBox() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 8;
      meshRef.current.rotation.y = Math.sin(t / 4) / 8;
      meshRef.current.position.y = (1 + Math.sin(t / 2)) / 10;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <RoundedBox ref={meshRef} args={[2, 2, 0.3]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.8} />
      </RoundedBox>
    </Float>
  );
}

interface FloatingCard3DProps {
  height?: number;
}

export default function FloatingCard3D({ height = 200 }: FloatingCard3DProps) {
  return (
    <div
      style={{ height: `${height}px`, width: "100%" }}
      className="rounded-2xl overflow-hidden"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight
            position={[-10, -10, -10]}
            color="#4da3ff"
            intensity={0.5}
          />
          <FloatingBox />
        </Suspense>
      </Canvas>
    </div>
  );
}
