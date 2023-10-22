import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


const MyModel = () => {
  const gltf = useGLTF('/desktop.glb');

  return (
    <group>
      <primitive object={gltf.scene} />
    </group>
  );
};

const Background = () => {
  return (
    <Canvas style={{height: "90vh"}} camera={{ position: [0, 10, 10] }}>
      <ambientLight intensity={10} />
      <pointLight intensity={0.5} position={[10, 10, 10]} />
      <OrbitControls />
      <MyModel />
    </Canvas>
  );
};

export default Background;