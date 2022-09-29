import React, { Suspense, useCallback, useMemo,useRef } from 'react'
import './threed.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Canvas,extend,useFrame,useLoader,useThree ,Text} from 'react-three-fiber';
import img from './asset/circle.png'


extend({OrbitControls})
// import{Canvas} from '@react-three/fiber';

function CameraControls(){
  const {
    camera,
    gl: {domElement}
  } = useThree();

  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update())

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate
      autoRotateSpeed={-0.2}
      maxDistance={100}
    />
  );
}


function Points(){

  
  const imgTexture=useLoader(THREE.TextureLoader,img);

  const bufferRef=useRef();

  let t=0;
  let f=0.002;
  let a=7;

  const graph=useCallback((x,z)=>{
    return Math.sin(f*(x**2+z**2+t))*a;
  },[t,f,a])
  
  const count=100;
  const sep=3;

  let positions=useMemo(()=>{
    let positions=[]

    for(let xi=0 ; xi < count;xi++){
      for(let zi=0;zi<count;zi++){
        let x=sep*(xi-count/2); 
        let z=sep*(zi-count/2);
        let y=graph(x,z);
        
        // console.log(y);
        positions.push(x,y,z);
      }
    }
    return new Float32Array(positions); 
  },[count,sep,graph])


  //to animate use useFrame function

  useFrame(()=>{
    t+=15
    //get current x y z from array using useRef

    const positions=bufferRef.current.array;
    let i=0;
    for(let xi=0 ; xi < count;xi++){
      for(let zi=0;zi<count;zi++){
        let x=sep*(xi-count/2); 
        let z=sep*(zi-count/2);
        
       //update y 
       positions[i+1]=graph(x,z);
       i=i+3;
      }
    }
    bufferRef.current.needsUpdate=true;
  })
    return (
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            ref={bufferRef}
            attachObject={['attributes','position']}
            array={positions}
            count={positions.length/3}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          attach="material"
        map={imgTexture}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
         />
      </points>

    );
}


function AnimationCanvas(){
  return(
    
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls/>
    </Canvas>
   

   
  );

}
 

export default function Threedimension() {
  return (
    
      <div className='Animation'>
      
      <Suspense fallback={<div>Loading...</div>}>
         <AnimationCanvas/> 
      </Suspense>
      
      
       
      </div>
    
  );
}
