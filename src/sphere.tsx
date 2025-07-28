import { useTexture } from "@react-three/drei";
import * as React from "react";
import { BackSide } from "three";

export interface SphereProps {}

export function Sphere(props: SphereProps) {
  const texture = useTexture("../Ehem-Bahnbetriebswerk_04.jpg");
  return (
    <mesh scale-z={-1}>
      <sphereGeometry args={[500, 100, 100]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}
