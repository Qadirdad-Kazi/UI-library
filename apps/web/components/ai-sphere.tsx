"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.18;
    mesh.current.rotation.y = t * 0.22;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={mesh} args={[1.6, 96, 96]}>
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.42}
          speed={1.6}
          roughness={0.15}
          metalness={0.85}
          emissive="#22d3ee"
          emissiveIntensity={0.18}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingParticles({ count = 220 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * 0.08;
    points.current.rotation.x = Math.sin(t * 0.2) * 0.2;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#a5f3fc"
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function Glow() {
  return (
    <mesh>
      <sphereGeometry args={[2.2, 32, 32]} />
      <meshBasicMaterial
        color="#7c3aed"
        transparent
        opacity={0.06}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

export function AiSphere({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 5]} intensity={1.5} color="#a78bfa" />
          <pointLight position={[-3, -2, 4]} intensity={2.2} color="#22d3ee" />
          <pointLight position={[3, 2, -2]} intensity={1.6} color="#ec4899" />
          <Core />
          <OrbitingParticles />
          <Glow />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
