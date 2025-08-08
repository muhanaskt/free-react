// Gsap3DCube.jsx
import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
 import { gsap } from "gsap";

function AnimatedCube() {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const cube = cubeRef.current;

    gsap.to(cube.rotation, {
      y: Math.PI * 2,
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.to(cube.position, {
      x: 2,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <mesh
      ref={cubeRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "blue"} />
    </mesh>
  );
}

export default function Gsap3DCube() {
  return (
    <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} intensity={1} />
      <AnimatedCube />
    </Canvas>
  );
}
