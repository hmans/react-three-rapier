import { Box } from "@react-three/drei";
import { RigidBody, UseRigidBodyOptions } from "@react-three/rapier";
import { ReactNode } from "react";
import { Setup } from "./Setup";

export default {
  decorators: [
    (Story, options) => (
      <Setup {...options.args}>
        <Story />
      </Setup>
    ),
  ],
  args: {
    debug: true,
  },
  argTypes: {
    colliders: {
      control: "select",
      options: ["cuboid", "ball", "hull", "trimesh"],
    },
  },
  component: RigidBody,
  title: "RigidBody",
};

const MainBox = () => (
  <Box receiveShadow castShadow>
    <meshPhysicalMaterial color="blue" />
  </Box>
);

export const Basic = (args: UseRigidBodyOptions) => (
  <RigidBody {...args}>
    <MainBox />
  </RigidBody>
);
Basic.args = {
  restitution: 1,
  friction: 1,
  colliders: "cuboid",
};
