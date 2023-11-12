import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ContactModel = () => {
  const gltf = useGLTF("/stylized_planet.glb");
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

const ContactRight = () => {

  const [canvasStyle, setCanvasStyle] = useState();
  const [cameraPosition, setCameraPosition] = useState([1, 1, 1]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setCanvasStyle({ height: "40vh" });
        setCameraPosition([1, 1, 1]);
      } else {
        setCanvasStyle({ height: "30vh" });
        setCameraPosition([2, 2, 2]);
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
        minDistance={2} // Set minimum zoom distance
        maxPolarAngle={Math.PI / 2} // Limit vertical rotation to half circle (optional)
      />
      <ContactModel />
    </Canvas>
  );
};

export default ContactRight;
