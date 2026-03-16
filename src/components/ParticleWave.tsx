"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

function Wave() {
  const meshRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const count = 80;
  const sep = 0.45;

  const { geometry, basePositions } = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    const base = new Float32Array(count * count * 3);
    let idx = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = (xi - count / 2) * sep;
        const z = (zi - count / 2) * sep;
        pos[idx] = x;
        pos[idx + 1] = 0;
        pos[idx + 2] = z;
        base[idx] = x;
        base[idx + 1] = 0;
        base[idx + 2] = z;
        idx += 3;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return { geometry: geo, basePositions: base };
  }, []);

  // 마우스 위치 추적
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouch);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * 0.4;
    const mx = mouse.current.x * 12;
    const my = mouse.current.y * 12;
    const posAttr = meshRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count * count; i++) {
      const ix = i * 3;
      const x = basePositions[ix];
      const z = basePositions[ix + 2];
      const dist = Math.sqrt(x * x + z * z);

      // 마우스와의 거리 계산 → 가까울수록 파티클이 솟아오름
      const dx = x - mx;
      const dz = z - my;
      const mouseDist = Math.sqrt(dx * dx + dz * dz);
      const mouseEffect = Math.max(0, 1 - mouseDist / 6) * 2.5;

      arr[ix + 1] =
        Math.sin(dist * 0.6 - t) * 0.8 +
        Math.sin(x * 0.4 + t * 0.7) * 0.3 +
        Math.cos(z * 0.3 + t * 0.5) * 0.3 +
        mouseEffect;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry} rotation={[-Math.PI / 3.5, 0, 0]} position={[0, -2, 0]}>
      <pointsMaterial
        size={1.8}
        color="#5E6AD2"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleWave() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 8, 18], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Wave />
      </Canvas>
    </div>
  );
}
