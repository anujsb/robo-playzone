"use client"
import React from 'react'
import {Canvas, useThree} from "@react-three/fiber"
export const Scene = () => {
  return (
    <div>
        <Canvas>
            <directionalLight position={[-5,-5, 5]} intensity={4} />
            // 3d obj here
        </Canvas>
    </div>
  )
}
