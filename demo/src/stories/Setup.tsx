import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { ReactNode, Suspense } from "react";

const Floor = () => {
  return (
    <RigidBody colliders="cuboid" type="fixed">
      <Box castShadow receiveShadow args={[20, 0.5, 20]} position={[0, -2, 0]}>
        <meshPhysicalMaterial />
      </Box>
    </RigidBody>
  );
};

export const Setup = ({ children, debug }: { children: ReactNode }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
      }}
    >
      <Canvas shadows>
        <Suspense>
          <Physics colliders={false}>
            {children}

            <Floor />

            <hemisphereLight
              color={"aqua"}
              groundColor={"orange"}
              intensity={0.1}
            />
            <directionalLight
              castShadow
              position={[5, 5, 5]}
              shadow-camera-left={-20}
              shadow-camera-right={20}
              shadow-camera-top={20}
              shadow-camera-bottom={-20}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />

            {debug && <Debug />}
          </Physics>
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
};
