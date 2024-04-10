import { RGBELoader } from 'three-stdlib'
import { Center, Text3D, MeshTransmissionMaterial } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"

function Text({ height = 0.3, lights, children, environment, config, font = '/Outfit_Bold.json', ...props }) {
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/fireplace_1k.hdr')




    return (
        <>
            <group>
                <Center scale={1} front top {...props}>
                    <Text3D
                        castShadow
                        bevelEnabled
                        font={font}
                        scale={5}
                        letterSpacing={-0.03}
                        height={height}
                        bevelSize={0.01}
                        bevelSegments={3}
                        curveSegments={64}
                        bevelThickness={0.01}>
                        {children}
                        {lights ? (
                            <MeshTransmissionMaterial {...config} backside={lights && config.backside} background={lights && environment && texture} />
                        ) : (
                            <meshPhysicalMaterial {...config} transmission={0} color="#999" />
                        )}
                    </Text3D>
                </Center>
                {lights && (
                    <group {...props}>
                        <Center position={[0.1, 0.2, 0.75]} scale={[0.925, 0.875, 1]} front top>
                            <Text3D
                                bevelEnabled={true}
                                font={font}
                                scale={5}
                                letterSpacing={0.1}
                                height={0.01}
                                bevelSize={0.01}
                                bevelSegments={1}
                                curveSegments={10}
                                bevelThickness={0.01}>
                                {children}
                                <meshBasicMaterial />
                            </Text3D>
                        </Center>
                    </group>
                )}
            </group>
        </>
    )
}

export default Text
