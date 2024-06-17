import React, { Dispatch, SetStateAction, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../Loader/Loader';
import Island from '../../models/island';
import Sky from '../../models/Sky';
import Bird from '../../models/Bird';
import Plane from '../../models/Plane';
import HomeInfo from './HomeInfo';
import ThemeModal from './ThemeModal';
import Island2 from '../../models/island2';

interface IHomeProps {
  isThemeOpen: boolean;
  setIsThemeOpen: Dispatch<SetStateAction<boolean>>;
  selectedTheme: number;
  setSelectedTheme: Dispatch<SetStateAction<number>>;
  setIsHome: Dispatch<SetStateAction<boolean>>;
  isHome: boolean;
}

const Home: React.FC<IHomeProps> = ({ isThemeOpen, setIsThemeOpen, selectedTheme, setSelectedTheme, setIsHome }) => {

    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);

    const adjustBiplaneForScreenSize = () => {
        let screenScale:[x: number, y: number, z: number], screenPosition:[x: number, y: number, z: number];

        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    };

    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43.4];
        } else {
            screenScale = [1, 1, 1];
            screenPosition = [0, -6.5, -43.4];
        }

        return [screenScale, screenPosition];
    };

    const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
    const [islandScale, islandPosition] = adjustIslandForScreenSize();

    useEffect(() => {
        setIsHome(true);
    })


  return (
    <>
        <section className='w-full h-screen relative'>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            {/* 3D Element Code */}
            <Canvas className={`w-full h-screen bg-transparent ${
                    isRotating ? "cursor-grabbing" : "cursor-grab"
                }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    {/* Give effect like sunlight */}
                    <directionalLight position={[1,1,1]} intensity={2}/>
                    {/* Without casting shadow...it makes all objects seen equally */}
                    <ambientLight intensity={0.5}/>
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <hemisphereLight
                        color='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />

                    <Bird />
                    <Sky isRotating={isRotating} />

                    {selectedTheme === 0 &&
                        <>
                            <Island 
                                isRotating={isRotating}
                                setIsRotating={setIsRotating}
                                setCurrentStage={setCurrentStage}
                                position={islandPosition}
                                scale={islandScale}
                                rotation={[0.1, 4.7077, 0]}
                            />

                            <Plane
                                isRotating={isRotating}
                                position={biplanePosition}
                                rotation={[0, 20.1, 0]}
                                scale={biplaneScale}
                            />
                        </>
                    }
                    {selectedTheme === 1 &&
                        <Island2 
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            setCurrentStage={setCurrentStage}
                            position={islandPosition}
                            scale={islandScale}
                            rotation={[0.1, 4.7077, 0]}
                        />
                    }
                    
                </Suspense>
            </Canvas>

        </section>
        <ThemeModal isThemeOpen={isThemeOpen} setIsThemeOpen={setIsThemeOpen} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme}/>
    </>
  )
}

export default Home
