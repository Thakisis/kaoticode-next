import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
export function Shadows({ shadow }) {
    return (

        <AccumulativeShadows frames={100} color={shadow} colorBlend={5} toneMapped={true} alphaTest={0.9} opacity={1.3} scale={30} position={[0, -1.01, 0]}>
            <RandomizedLight amount={4} radius={8} position={[0, 10, -10]} size={15} mapSize={256} />
        </AccumulativeShadows>
    )

}


