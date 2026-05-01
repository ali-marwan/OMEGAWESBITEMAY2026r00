"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Group } from "three";

useGLTF.preload("/models/omega-logo-final.glb");

function Model() {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF("/models/omega-logo-final.glb");

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={1.2} />
    </group>
  );
}

export default function OmegaLogo3D({ className = "" }: { className?: string }) {
  const [inView, setInView] = useState(false);
  const [errored, setErrored] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(wrapRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden>
      {inView && !errored ? (
        <Canvas
          dpr={[1, 1.6]}
          camera={{ position: [0, 0, 4], fov: 35 }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
          onError={() => setErrored(true)}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 5]} intensity={1.2} />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="/omega-logo.svg"
            alt=""
            className="h-12 w-auto opacity-50"
          />
        </div>
      )}
    </div>
  );
}
