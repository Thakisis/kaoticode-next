import { EffectComposer, HueSaturation, TiltShift2, ASCII } from '@react-three/postprocessing'

function PostProcess({ saturation }) {
    return (
        <EffectComposer disableNormalPass multisampling={4}>

        </EffectComposer>
    )
}

export default PostProcess
