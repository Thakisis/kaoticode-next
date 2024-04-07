import styles from './GlassCard.module.scss'
import { IconDesign } from '@/Icons'
function GlassCard({ title, image, icon }) {
    const Icon = icon
    return (
        <div className={styles.glassCard}>
            <div className={styles.main}>
                <div className={styles.imageWrapper}>
                    <div className={styles.iconWrapper}><Icon id="designIcon" className={styles.icon}></Icon></div>
                    <img className={styles.Image} src={image} alt="NFT" />
                </div>
                <h3>{title}</h3>
                <p className={styles.description}>Creamos diseños completamente personalizados que se adaptan a la visión de tu proyecto, utilizando una paleta de colores óptima para transmitir la idea deseada.    </p>
                <hr />
                <div className={styles.access}>
                    text
                </div>
            </div>
        </div>
    )
}

export default GlassCard
