"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Float, useTexture } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

interface CardMeshProps {
  isHovered: boolean;
  color: string;
}

interface CardMeshWithImageProps extends CardMeshProps {
  image: string;
}

function CardMeshWithImage({
  isHovered,
  color,
  image,
}: CardMeshWithImageProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(image);

  useFrame((state) => {
    if (meshRef.current) {
      const targetScale = isHovered ? 1.1 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );

      meshRef.current.rotation.y = isHovered
        ? Math.sin(state.clock.elapsedTime * 2) * 0.2
        : 0;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 2, 0.3]} />
        <meshStandardMaterial map={texture} roughness={0.5} metalness={0} />
      </mesh>
    </Float>
  );
}

function CardMesh({ isHovered, color }: CardMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      const targetScale = isHovered ? 1.1 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );

      meshRef.current.rotation.y = isHovered
        ? Math.sin(state.clock.elapsedTime * 2) * 0.2
        : 0;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <RoundedBox ref={meshRef} args={[3, 2, 0.2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={isHovered ? 0.3 : 0.1}
        />
      </RoundedBox>
    </Float>
  );
}

interface Project3DCardProps {
  color?: string;
  height?: number;
  image?: string;
}

export default function Project3DCard({
  color = "#8b5cf6",
  height = 250,
  image,
}: Project3DCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ height: `${height}px`, width: "100%" }}
      className="rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={<CardMesh isHovered={false} color={color} />}>
          <ambientLight intensity={image ? 1.2 : 0.5} />
          <directionalLight position={[0, 0, 5]} intensity={image ? 2.5 : 1} />
          <pointLight
            position={[10, 10, 10]}
            intensity={image ? 0.5 : 1}
            color="#a855f7"
          />
          <pointLight
            position={[-10, -10, -10]}
            color="#06b6d4"
            intensity={image ? 0.3 : 0.8}
          />
          {!image && (
            <spotLight
              position={[0, 5, 0]}
              intensity={0.5}
              angle={0.5}
              color={color}
            />
          )}
          {image ? (
            <CardMeshWithImage
              isHovered={isHovered}
              color={color}
              image={image}
            />
          ) : (
            <CardMesh isHovered={isHovered} color={color} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
