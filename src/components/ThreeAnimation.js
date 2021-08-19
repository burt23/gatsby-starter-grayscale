import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AmbientLight } from 'three';

const Tetrahedron = ({ props, rotation = 1, color }) => {
  const ref = useRef();

  //   useEffect(() => {
  //     if (ref.current) {
  //       ref.current.position.y = ref.current.position.y + 10 * rotation;
  //     }
  //   });

  useFrame((state, delta) => {
    console.log('ref', ref.current);
    ref.current.up = { x: 1, y: 1, z: 10 };
    ref.current.position.y = 0.5 * rotation;
    ref.current.rotation.y = ref.current.rotation.y + 0.01 * rotation;
    return;
  });
  return (
    <mesh {...props} ref={ref}>
      <tetrahedronGeometry rotateX={45} args={[2, 0]} />
      <meshStandardMaterial color={color} opacity={0.3} />
    </mesh>
  );
};

const Ring = ({ props, rotation = 1 }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y = ref.current.rotation.y + 0.01 * rotation;
    return;
  });

  return (
    <mesh {...props} ref={ref}>
      <torusGeometry color="red" args={[2, 0.1, 16, 50, 6.3]} />

      <meshStandardMaterial color="red" emissive="0x0" />
    </mesh>
  );
};

const ThreeAnimation = () => {
  return (
    <Canvas className="threeAnimationWrapper">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Ring rotation={-1} position={[-20, 0, 0]} />
      <Ring position={[2, 0, 0]} />
      <Tetrahedron position={[1, 0, 0]} color="pink" rotation={-1} />
      <Tetrahedron position={[-1, 0, 0]} color="green" />
    </Canvas>
  );
};

export default ThreeAnimation;
