"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroObject() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(1.75, 1);
    const glass = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#d9c188"),
      metalness: 0.2,
      roughness: 0.08,
      transmission: 0.78,
      thickness: 1.05,
      ior: 1.45,
      transparent: true,
      opacity: 0.34,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
    });
    const mesh = new THREE.Mesh(geometry, glass);
    group.add(mesh);

    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0xf5d67c, transparent: true, opacity: 0.72 }),
    );
    group.add(wire);

    const inner = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.05, 0)),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 }),
    );
    group.add(inner);

    const particles = new THREE.Group();
    for (let i = 0; i < 34; i += 1) {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(Math.random() * 0.018 + 0.01, 10, 10),
        new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0xf5d67c : 0xffffff, transparent: true, opacity: i % 3 === 0 ? 0.9 : 0.36 }),
      );
      const radius = 2.35 + Math.random() * 1.15;
      const angle = Math.random() * Math.PI * 2;
      dot.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 2.2, Math.sin(angle) * radius * 0.3);
      particles.add(dot);
    }
    scene.add(particles);

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);
    const key = new THREE.PointLight(0xf5d67c, 8, 10);
    key.position.set(2.4, 2.5, 3.2);
    scene.add(key);
    const rim = new THREE.PointLight(0xffffff, 2.2, 10);
    rim.position.set(-2.2, -1.6, 3.6);
    scene.add(rim);

    let pointerX = 0;
    let pointerY = 0;
    let raf = 0;

    const onPointer = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.6;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.x = t * 0.16 + pointerY;
      group.rotation.y = t * 0.22 + pointerX;
      group.rotation.z = Math.sin(t * 0.28) * 0.08;
      particles.rotation.y = -t * 0.05;
      particles.rotation.z = t * 0.02;
      key.intensity = 7 + Math.sin(t * 1.25) * 1.1;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    mount.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(raf);
      mount.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      glass.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div ref={mountRef} className="relative h-[360px] w-full sm:h-[520px] lg:h-[620px]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[90px]" />
      <div className="absolute inset-x-[10%] bottom-[6%] h-24 rounded-full bg-black/70 blur-2xl" />
    </div>
  );
}
