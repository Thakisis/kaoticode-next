import styles from './GlassWeb.module.scss'
import Image from 'next/image'
function GlassWeb({ title, image, icon }) {
    const Icon = icon
    return (
        <div className={styles.glassCard}>
            <div className={styles.main}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.Image} width={1903} height={956} src={image} alt="website" />
                </div>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default GlassWeb
