"use client";

import dynamic from "next/dynamic";

const ParticleWave = dynamic(() => import("@/components/ParticleWave"), {
  ssr: false,
});

export default function ParticleWaveLoader() {
  return <ParticleWave />;
}
