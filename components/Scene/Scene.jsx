import Floor from "./Floor"
import { Text3D, Center, CameraControls } from "@react-three/drei"
import { KaotiCode } from './Kaoticode'
import { useRef, useEffect } from 'react'
export function Scene() {


    return (
        <>


            <KaotiCode scale={1.9} rotation={[0, 0, 0]} ></KaotiCode>


        </>

    )
}
