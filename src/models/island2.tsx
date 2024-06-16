import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei'
import islandScene2 from "../assets/3d/sea_keep_lonely_watcher.glb";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

interface Island2Props {
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStage: (stage: number) => void;
  currentFocusPoint: string;
  // Include any other props that might be passed to the component
  [key: string]: any;
}

const Island2: React.FC<Island2Props> = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props}) => {

    const islandRef = useRef();
    // Get access to the Three.js renderer and viewport
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene2);


    // Use a ref for the last mouse x position
    const lastX = useRef(0);
    // Use a ref for rotation speed
    const rotationSpeed = useRef(0);
    // Define a damping factor to control rotation damping
    const dampingFactor = 0.95;

        // Handle pointer (mouse or touch) down event
    const handlePointerDown = (event: { stopPropagation: () => void; preventDefault: () => void; touches: { clientX: any; }[]; clientX: any; }) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(true);

        // Calculate the clientX based on whether it's a touch event or a mouse event
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;

        // Store the current clientX position for reference
        lastX.current = clientX;
    };

    // Handle pointer (mouse or touch) up event
    const handlePointerUp = (event: { stopPropagation: () => void; preventDefault: () => void; }) => {
        event.stopPropagation();
        event.preventDefault();
        setIsRotating(false);
    };

    // Handle pointer (mouse or touch) move event
    const handlePointerMove = (event: { stopPropagation: () => void; preventDefault: () => void; touches: { clientX: any; }[]; clientX: any; }) => {
        event.stopPropagation();
        event.preventDefault();
        if (isRotating) {
        // If rotation is enabled, calculate the change in clientX position
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;

        // calculate the change in the horizontal position of the mouse cursor or touch input,
        // relative to the viewport's width
        const delta = (clientX - lastX.current) / viewport.width;

        // Update the island's rotation based on the mouse/touch movement
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;

        // Update the reference for the last clientX position
        lastX.current = clientX;

        // Update the rotation speed
        rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    // Handle keydown events
    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === "ArrowLeft") {
            if (!isRotating) setIsRotating(true);

            islandRef.current.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
        } else if (event.key === "ArrowRight") {
            if (!isRotating) setIsRotating(true);

            islandRef.current.rotation.y -= 0.01 * Math.PI;
            rotationSpeed.current = -0.0125;
        }
    };

    // Handle keyup events
    const handleKeyUp = (event: { key: string; }) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
        }
    };

    // Touch events for mobile devices
    const handleTouchStart = (e: { stopPropagation: () => void; preventDefault: () => void; touches: { clientX: any; }[]; clientX: any; }) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
    
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }
    
    const handleTouchEnd = (e: { stopPropagation: () => void; preventDefault: () => void; }) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }
    
    const handleTouchMove = (e: { stopPropagation: () => void; preventDefault: () => void; touches: { clientX: any; }[]; clientX: any; }) => {
        e.stopPropagation();
        e.preventDefault();
    
        if (isRotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const delta = (clientX - lastX.current) / viewport.width;
    
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    useEffect(() => {
        // Add event listeners for pointer and keyboard events
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchend", handleTouchEnd);
        canvas.addEventListener("touchmove", handleTouchMove);

        // Remove event listeners when component unmounts
        return () => {
        canvas.removeEventListener("pointerdown", handlePointerDown);
        canvas.removeEventListener("pointerup", handlePointerUp);
        canvas.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
        canvas.removeEventListener("touchstart", handleTouchStart);
        canvas.removeEventListener("touchend", handleTouchEnd);
        canvas.removeEventListener("touchmove", handleTouchMove);
        };
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    // This function is called on each frame update
    useFrame(() => {
        // If not rotating, apply damping to slow down the rotation (smoothly)
        if (!isRotating) {
            // Apply damping factor
            rotationSpeed.current *= dampingFactor;

            // Stop rotation when speed is very small
            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            // When rotating, determine the current stage based on island's orientation
            let rotation = islandRef.current.rotation.y;

            /**
             * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
             * The goal is to ensure that the rotation value remains within a specific range to
             * prevent potential issues with very large or negative rotation values.
             *  Here's a step-by-step explanation of what this code does:
             *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
             *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
             *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
             *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
             *     This is done to ensure that the value remains positive and within the range of
             *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
             *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
             *     modulo operation to the value obtained in step 2. This step guarantees that the value
             *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
             *     circle in radians.
             */
            const normalizedRotation =
                ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            console.log(normalizedRotation);

            // Set the current stage based on the island's orientation
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                setCurrentStage(4);
                break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                setCurrentStage(3);
                break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                setCurrentStage(2);
                break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                setCurrentStage(1);
                break;
                default:
                setCurrentStage(null);
            }
        }
    });

  return (
    <a.group ref={islandRef} {...props}>
      <group position={[-17.117, 21.356, 23.591]} rotation={[-1.5, 0, 4]}>
        <group position={[-3.745, -300.713, -40.289]}> 
          <mesh
            geometry={nodes.Fortress_Fortress_0.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Fortress_0_1.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Fortress_0_2.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Environment_0.geometry}
            material={materials.Environment}
          />
          <mesh
            geometry={nodes.Fortress_Sand_0.geometry}
            material={materials.Sand}
          />
        </group>
      </group>
      {/* <mesh
        geometry={nodes.Sea_Sea_0.geometry}
        material={materials.material}
        position={[-1.388, 326.224, 14.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
      {/* <mesh
        geometry={nodes.Sky_Sky_0.geometry}
        material={materials.material_4}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
    </a.group>
  )
}

export default Island2;

