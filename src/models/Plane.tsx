import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import {  Material, Mesh, MeshStandardMaterial, } from "three";
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    GLTF_created_0_rootJoint: object;
    Object_7: any;
    Object_8: any;
    Object_9: any;
    Object_10: any;
    Object_11: any;
    Fortress_Fortress_0: any;
    Fortress_Fortress_0_1: any;
    Fortress_Fortress_0_2: any;
    Fortress_Environment_0: any;
    Fortress_Sand_0: any;
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


interface IPlaneProps {
  isRotating: boolean;
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
  scale: [x: number, y: number, z: number];
}

const Plane : React.FC<IPlaneProps> = ({ isRotating, position, rotation, scale }) => {

  const props = {position, rotation, scale};
  const ref = useRef<Mesh>(null);
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF('src/assets/3d/plane.glb') as GLTFResult;
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    // if (isRotating) {
    //   actions["Take 001"]?.play();
    // } else {
    //   actions["Take 001"]?.stop();
    // }
    actions["Take 001"]?.play();
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;