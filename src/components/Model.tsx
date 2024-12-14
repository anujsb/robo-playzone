
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


useGLTF.preload('/')
export default function Model() {
    const group = useRef<Group>(null)
  return (
    <div>
        <group>
            <primitive />
        </group>
    </div>
  )
}
