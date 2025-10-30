"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const geometryRef = useRef<THREE.PlaneGeometry>(null!);

  const count = 50;

  useFrame((state) => {
    if (meshRef.current && geometryRef.current) {
      const time = state.clock.elapsedTime;
      const positions = geometryRef.current.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);

        const wave1 = Math.sin(x * 0.5 + time) * 0.3;
        const wave2 = Math.sin(y * 0.3 + time * 1.5) * 0.2;

        positions.setZ(i, wave1 + wave2);
      }

      positions.needsUpdate = true;
      geometryRef.current.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, -5]}>
      <planeGeometry ref={geometryRef} args={[15, 15, count, count]} />
      <meshStandardMaterial
        color="#06b6d4"
        wireframe={true}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <WavePlane />
        </Suspense>
      </Canvas>
    </div>
  );
}
