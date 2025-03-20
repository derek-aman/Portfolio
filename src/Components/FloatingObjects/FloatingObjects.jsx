import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';

function FloatingObject({ color, position }) {
  return (
    <Float speed={2} rotationIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
}

export default function FloatingObjects() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingObject color="hotpink" position={[1, 1, 0]} />
      <FloatingObject color="cyan" position={[-1, -1, 0]} />
      <OrbitControls />
    </Canvas>
  );
}