import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './App.css';

import Scene from './Scene';

const App = () => {
    return(
        <div className="main__canvas">
            <Canvas camera={{position: [0, 2, 5]}} className="main__canvas">
                <OrbitControls />

                <hemisphereLight intensity={.35} />

                <spotLight position={[10, 10, 10]} angle={.3} penumbra={1} intensity={2} />

                <React.Suspense fallback={null}>
                    <Scene />
                </React.Suspense>
            </Canvas>
        </div>
    )
}

export default App;