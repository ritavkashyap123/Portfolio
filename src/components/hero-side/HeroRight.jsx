import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const HeroModel = () => {
  const gltf = useGLTF("/robot_playground.glb");
  const modelRef = useRef();

  // Use useFrame hook for animation
  useFrame(() => {
    if (modelRef.current) {
      // Rotate the model automatically (you can adjust the rotation speed)
      modelRef.current.rotation.y -= 0.01; // Rotation speed around the x-axis
      // modelRef.current.rotation.y += 0.01; // Rotation speed around the y-axis
    }
  });

  return (
    <group>
      <primitive object={gltf.scene} ref={modelRef} />
    </group>
  );
};

const HeroRight = () => {

  const [canvasStyle, setCanvasStyle] = useState({ height: "60vh" });
  const [cameraPosition, setCameraPosition] = useState([2, 2, 2]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1400) {
        setCanvasStyle({ height: "60vh" });
        setCameraPosition([2, 2, 2]);
      } else {
        setCanvasStyle({ height: "60vh" });
        setCameraPosition([3, 3, 3]);
      }
    };

    // Set initial style and camera position
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial ren

  return (
    <Canvas style={canvasStyle} camera={{ position: cameraPosition }}>
      <ambientLight intensity={10} />
      <pointLight intensity={0.5} position={[10, 10, 10]} />
      <OrbitControls
        enableZoom={true} // Enable zooming
        minDistance={4} // Set minimum zoom distance
        maxPolarAngle={Math.PI / 2} // Limit vertical rotation to half circle (optional)
      />
      <HeroModel />
    </Canvas>
  );
};

export default HeroRight;
