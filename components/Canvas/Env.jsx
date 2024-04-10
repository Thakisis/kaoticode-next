import { Environment, Lightformer } from "@react-three/drei"

function Env(props) {
    return (<Environment
        files={['/Env/rural_asphalt_road_4k.webp', '/Env/rural_asphalt_road_4k-gainmap.webp', '/Env/rural_asphalt_road_4k.json']}

        backgroundRotation={[0, -Math.PI / 4, 0]}
        environmentRotation={[0, -Math.PI / 4, 0]}
    />
    )
    return (
        <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 0, 1]}>
                <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
                <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
            </group>
        </Environment>

    )
}

export default Env
