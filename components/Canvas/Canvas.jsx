"use client"
import { Canvas as Canvasr3f, useFrame } from '@react-three/fiber'
import { Scene } from '@/components/Scene'
import { easing } from 'maath'
import Env from './Env'
import { Shadows } from './Shadows'

export default function Canvas() {


    return <Canvasr3f
        shadows
        eventSource={document}

        camera={{ position: [20, 0.9, 20], fov: 26 }}
        gl={{ antialias: true }}
        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100dvh", zIndex: 2 }}
    >

        <Env></Env>
        <Rig />
        <color attach="background" args={['#151520']} />
        <Scene></Scene>

    </Canvasr3f>

}


function Rig() {
    useFrame((state, delta) => {
        // Animate the environment as well as the camera

        easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
        state.camera.lookAt(0, 0, 0)

    })
    return
}
