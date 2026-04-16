'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

function ProductShape() {
  return (
    <mesh castShadow>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.18} />
    </mesh>
  );
}

export function ModelViewer() {
  return (
    <div className="h-[380px] w-full rounded-2xl bg-slate-900">
      <Canvas camera={{ position: [0, 0, 4] }} shadows>
        <ambientLight intensity={0.55} />
        <directionalLight castShadow position={[4, 6, 2]} intensity={1.2} />
        <ProductShape />
        <Environment preset="city" />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
