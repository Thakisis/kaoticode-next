import { Environment, Lightformer } from "@react-three/drei"

function Env(props) {
    return (<Environment
        files={['/Env/rural_asphalt_road_4k.webp', '/Env/rural_asphalt_road_4k-gainmap.webp', '/Env/rural_asphalt_road_4k.json']}
        ground={{ height: 35, radius: 160000, scale: 300 }}
        backgroundRotation={[0, -Math.PI / 4, 0]}
        environmentRotation={[0, -Math.PI / 4, 0]}
    />
    )
    return (
        <Environment resolution={32} background>
            <group rotation={[-Math.PI / 4, -0.3, 0]}>
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                <Lightformer intensity={1} rotation-y={Math.PI / 2} position={[-10, 0, -1]} scale={[10, 2, 1]} />
                <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 10, 1]} />
            </group>
        </Environment>

    )
}

export default Env
