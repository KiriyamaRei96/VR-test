import { useXRMeshes, XRSpace } from "@react-three/xr";
import * as React from "react";
import { DoubleSide } from "three";

export interface XRSpaceWrapperProps {}

export function XRSpaceWrapper(props: XRSpaceWrapperProps) {
  const [red, setRed] = React.useState(false);
  const meshes = useXRMeshes();
  return (
    <>
      {meshes.map((mesh) => (
        <XRSpace space={mesh.meshSpace}>
          <mesh
            pointerEvents="auto"
            onClick={() => setRed(!red)}
            position={[-5, 0, -5]}
          >
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial side={DoubleSide} color={red ? "red" : "blue"} />
          </mesh>
        </XRSpace>
      ))}
    </>
  );
}
