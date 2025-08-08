// GsapThreeScene.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function GsapThreeScene() {
  const mountRef = useRef();

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animate with GSAP
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

    // Scale on click
    let scaled = false;
    function onClick() {
      scaled = !scaled;
      gsap.to(cube.scale, {
        x: scaled ? 1.5 : 1,
        y: scaled ? 1.5 : 1,
        z: scaled ? 1.5 : 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }
    renderer.domElement.addEventListener("click", onClick);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.domElement.removeEventListener("click", onClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    />
  );
}
