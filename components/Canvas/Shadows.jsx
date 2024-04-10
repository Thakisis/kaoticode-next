import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
export function Shadows({ shadow }) {
    return (
        <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
            <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="black" scale={20} position={[0, -0.005, 0]}>
                <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
            </AccumulativeShadows>
        </group>
    )

}


