"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function InteractiveParticles() {
  const ref = useRef<THREE.Points>(null!);
  const { viewport, mouse } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const particlesCount = 3000;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Color gradient from purple to cyan
      const colorMix = Math.random();
      colors[i * 3] = colorMix * 0.5 + 0.3; // R
      colors[i * 3 + 1] = colorMix * 0.8 + 0.2; // G
      colors[i * 3 + 2] = 1; // B
    }
    return { positions, colors };
  }, [particlesCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Smooth mouse following
      setMousePos({
        x: THREE.MathUtils.lerp(mousePos.x, mouse.x, 0.05),
        y: THREE.MathUtils.lerp(mousePos.y, mouse.y, 0.05),
      });

      // Rotate based on mouse position
      ref.current.rotation.x = -mousePos.y * 0.3;
      ref.current.rotation.y = mousePos.x * 0.3;

      // Continuous slow rotation
      ref.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <InteractiveParticles />
        </Suspense>
      </Canvas>
    </div>
  );
}
