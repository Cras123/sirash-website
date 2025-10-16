"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Float } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";

interface Letter3DProps {
  char: string;
  finalPosition: [number, number, number];
  index: number;
}

function Letter3D({ char, finalPosition, index }: Letter3DProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hasSettled, setHasSettled] = useState(false);

  const startPosition = useMemo(() => {
    const angle = (index * 137.5 * Math.PI) / 180; // Golden angle
    const radius = 15 + Math.random() * 10;
    return [
      Math.cos(angle) * radius,
      Math.sin(angle) * radius + (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 20,
    ] as [number, number, number];
  }, [index]);

  const startRotation = useMemo(
    () =>
      [
        (Math.random() - 0.5) * Math.PI * 4,
        (Math.random() - 0.5) * Math.PI * 4,
        (Math.random() - 0.5) * Math.PI * 4,
      ] as [number, number, number],
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = Math.min((state.clock.elapsedTime - index * 0.05) / 2, 1);
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    if (t >= 1 && !hasSettled) {
      setHasSettled(true);
    }

    if (t < 1) {
      meshRef.current.position.x = THREE.MathUtils.lerp(
        startPosition[0],
        finalPosition[0],
        eased
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        startPosition[1],
        finalPosition[1],
        eased
      );
      meshRef.current.position.z = THREE.MathUtils.lerp(
        startPosition[2],
        finalPosition[2],
        eased
      );

      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        startRotation[0],
        0,
        eased
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        startRotation[1],
        0,
        eased
      );
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        startRotation[2],
        0,
        eased
      );
    } else {
      // Subtle floating after settled
      meshRef.current.position.y =
        finalPosition[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
    }
  });

  return (
    <Float
      speed={hasSettled ? 1 : 0}
      rotationIntensity={hasSettled ? 0.1 : 0}
      floatIntensity={hasSettled ? 0.1 : 0}
    >
      <mesh ref={meshRef} position={startPosition}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.5}
          height={0.15}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelSegments={5}
        >
          {char}
          <meshStandardMaterial
            color={hasSettled ? "#a855f7" : "#06b6d4"}
            emissive={hasSettled ? "#a855f7" : "#06b6d4"}
            emissiveIntensity={0.3}
            metalness={0.6}
            roughness={0.2}
          />
        </Text3D>
      </mesh>
    </Float>
  );
}

function ScrambleTextScene({ text }: { text: string }) {
  const chars = text.split("");
  const totalWidth = chars.length * 0.55;

  return (
    <group>
      {chars.map((char, i) => {
        if (char === " ") return null;
        const x = i * 0.55 - totalWidth / 2;
        return (
          <Letter3D key={i} char={char} finalPosition={[x, 0, 0]} index={i} />
        );
      })}
    </group>
  );
}

export default function ScrambleText3D({
  text = "SIRASH MAHARJAN",
}: {
  text?: string;
}) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.8}
            color="#06b6d4"
          />
          <spotLight
            position={[0, 15, 10]}
            intensity={1.5}
            angle={0.6}
            penumbra={1}
            color="#ffffff"
          />
          <Center>
            <ScrambleTextScene text={text} />
          </Center>
        </Suspense>
      </Canvas>
    </div>
  );
}
