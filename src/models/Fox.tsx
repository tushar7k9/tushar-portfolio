import React, { useRef, useEffect, RefObject } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, Object3DEventMap, Material, Mesh, MeshStandardMaterial, } from "three";
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    GLTF_created_0_rootJoint: object;
    Object_7: any;
    Object_8: any;
    Object_9: any;
    Object_10: any;
    Object_11: any;
    Cube: Mesh
  }
  materials: {
    PaletteMaterial001: Material | Material[] | undefined;
    Fortress: Material | Material[] | undefined;
    Environment: Material | Material[] | undefined;
    Sand: Material | Material[] | undefined;
    ['Material.001']: MeshStandardMaterial
  }
}

interface IFoxProps {
  currentAnimation: string;
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
  scale: [x: number, y: number, z: number];
}

const Fox: React.FC<IFoxProps> = ({
  currentAnimation, position, rotation, scale, 
}) => {
  const props = {position, rotation, scale};
  const group: RefObject<Group<Object3DEventMap>> = useRef(null);
  const { nodes, materials, animations } = useGLTF('/3d/fox.glb') as GLTFResult;
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation]?.play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name='Object_7'
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name='Object_8'
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name='Object_9'
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name='Object_10'
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name='Object_11'
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

export default Fox;