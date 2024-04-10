import { Grid } from "@react-three/drei"

function Floor({ stripes }) {
    return (
        <Grid
            position={[0, -1, 0]}
            cellSize={2.25}
            cellThickness={1}
            cellColor="#3a3a3a"
            sectionSize={5.5}
            sectionThickness={1.5}
            sectionColor={stripes}
            fadeDistance={40}
            fadeStrength={1}
            infiniteGrid
        />
    )
}

export default Floor
