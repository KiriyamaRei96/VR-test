import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function DwellInteractive({ children, onClick, dwellTime = 500 }) {
  const ref = useRef();
  const [hoverStart, setHoverStart] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    if (isHovered && hoverStart) {
      const elapsed = Date.now() - hoverStart;
      if (elapsed >= dwellTime) {
        onClick(); // Trigger the onClick effect
        setHoverStart(null); // Reset to avoid repeat triggers
      }
    }
  });

  return (
    <group
      ref={ref}
      onPointerOver={() => {
        setIsHovered(true);
        setHoverStart(Date.now());
      }}
      onPointerOut={() => {
        setIsHovered(false);
        setHoverStart(null);
      }}
    >
      {children}
    </group>
  );
}
