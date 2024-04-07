import styles from './ServicesIndex.module.scss'
import GlassCard from '@/components/GlassCard'
import { IconDesign } from '@/Icons'
export function ServicesIndex(props) {
    return (
        <section before="KAOTICODE" className={` h-screen flex justify-between items-center  relative before:text-zinc-300  before:content-[attr(before)]  ${styles.wordBG} `}>
            <GlassCard title="Diseño" image='/images/DesignCard.jpg' icon={IconDesign} />
            <GlassCard title="Desarrollo" image='/images/DevelopmentCard.jpg' icon={IconDesign} />
            <GlassCard title="Mantenimiento" image='/images/MaintenanceCard.jpg' icon={IconDesign} />

        </section>
    )
}


