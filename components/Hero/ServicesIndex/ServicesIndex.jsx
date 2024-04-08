
import GlassCard from '@/components/GlassCard'
import { IconDesign } from '@/Icons'
import styles from './ServicesIndex.module.scss'
export function ServicesIndex(props) {
    return (
        <section before="KAOTICODE" className={` h-screen flex flex-col   relative before:text-zinc-300  before:content-[attr(before)]  ${styles.wordBG} `}>
            <div className='flex w-full justify-center'>
                <h2 className={`text-5xl font-medium tracking-[.4rem] mt-8 ${styles.title}`}>Servicios</h2>
            </div>
            <div className='flex justify-between items-center '>
                <GlassCard title="Diseño" image='/images/DesignCard2.webp' icon={IconDesign} />
                <GlassCard title="Desarrollo" image='/images/DevelopmentCard.webp' icon={IconDesign} />
                <GlassCard title="Mantenimiento" image='/images/MaintenanceCard.webp' icon={IconDesign} />
            </div>
            <div className='flex flex-1 justify-center items-center font-extralight text-2xl'>
                <p className='flex  max-w-prose'>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex obcaecati, velit fugiat nihil nesciunt possimus illum deserunt. Recusandae nesciunt omnis a! Accusantium sint maiores impedit eaque deleniti nihil optio.&ldquo;
                </p>
            </div>
        </section>
    )
}


