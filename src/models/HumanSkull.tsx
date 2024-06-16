import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import scene from "../assets/3d/free_human_skull.glb";

const HumanSkull = (props) => {
  const { nodes, materials } = useGLTF(scene)
  return (
    <group {...props} dispose={null}>
      <group position={[0, 21.277, 61.684]} rotation={[-Math.PI / 2, 0, 0]} scale={37.736}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Quad_Sphere001_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
          position={[0, 1.515, -0.648]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/free_human_skull.glb')

export default HumanSkull;