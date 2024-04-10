import styles from './GlassCard.module.scss'
import Image from 'next/image'
import { IconDesign } from '@/Icons'
function GlassCard({ title, image, icon, desc }) {
    const Icon = icon
    return (
        <div className={styles.glassCard}>
            <div className={styles.main}>
                <div className={styles.imageWrapper}>
                    <div className={styles.iconWrapper}><Icon id="designIcon" className={styles.icon}></Icon></div>
                    <Image className={styles.Image} src={image} alt={`${title} image`} />
                </div>
                <h3>{title}</h3>
                <p className={styles.description}>
                    {desc}
                </p>
                <hr />
                <div className={styles.access}>
                    text
                </div>
            </div>
        </div>
    )
}

export default GlassCard
