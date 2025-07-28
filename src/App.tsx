import {
  DefaultXRGaze,
  IfInSessionMode,
  XR,
  XRSpace,
  createXRStore,
  useXRMeshes,
} from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import {
  CameraControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import { BackSide, DoubleSide } from "three";
import { Sphere } from "./sphere";
import { DwellInteractive } from "./dwell-interactive";
import { XRSpaceWrapper } from "./xr-space-wrapper";

const store = createXRStore({
  transientPointer: true,
  gaze: () => {
    return (
      <DefaultXRGaze
        clickThresholdMs={500}
        cursorModel={{ size: 1, opacity: 1, color: "white" }}
      />
    );
  },
  hand: false,
  handTracking: false,
  controller: false,
  offerSession: "immersive-vr",
});
export default function App() {
  const [red, setRed] = useState(false);

  return (
    <>
      <button onClick={() => store.enterVR()}>Enter VR</button>
      <Canvas>
        <XR store={store}>
          <CameraControls makeDefault />
          <PerspectiveCamera position={[0, 0, 0]} />
          <Sphere />
          <DwellInteractive onClick={() => setRed(!red)}>
            <mesh pointerEvents="auto" position={[-5, 0, -5]}>
              <boxGeometry args={[2, 2, 2]} />
              <meshBasicMaterial
                side={DoubleSide}
                color={red ? "red" : "blue"}
              />
            </mesh>
          </DwellInteractive>
        </XR>
      </Canvas>
    </>
  );
}
