import { RefObject, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Material, Mesh, MeshStandardMaterial, } from "three";
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

interface ISkyProps {
  isRotating: boolean;
}

const Sky: React.FC<ISkyProps> = ({ isRotating }) => {
  const { scene, animations } = useGLTF('/3d/sky.glb') as GLTFResult;
  const skyRef = useRef<Mesh>() as RefObject<Mesh>;

  const { actions } = useAnimations(animations, skyRef);

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (true && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}

export default Sky;