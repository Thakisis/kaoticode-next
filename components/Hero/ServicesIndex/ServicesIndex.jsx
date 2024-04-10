
import GlassCard from '@/components/GlassCard'
import { cards } from '@/data'
import styles from './ServicesIndex.module.scss'
import { getTranslator } from '@/components/helpers'
/*
"designTitle": "Diseño",
    "designCard": "Creamos diseños totalmente personalizados que se adaptan a la visión de tu proyecto, utilizando una paleta de colores óptima para transmitir la idea deseada con precisión y elegancia.",
    "developmentTitle": "Desarrollo",
    "developmentCard": "Desarrollamos proyectos siguiendo los últimos patrones de arquitectura y empleando las prácticas más avanzadas en seguridad, garantizando soluciones tecnológicas de vanguardia y eficacia probada.",
    "maintenanceTitle": "Mantenimiento",
    "maintenanceCard": "Ofrecemos un servicio de mantenimiento mensual para mantener tu proyecto siempre actualizado y proporcionamos cambios menores de forma gratuita, asegurando su óptimo funcionamiento continuo y sin interrupciones."
    */
export async function ServicesIndex(props) {
    const { t } = await getTranslator('Index')
    const cardsList = cards.map(({ name, image, icon }) => <GlassCard key={name} title={t(`${name}Title`)} image={image} desc={t(`${name}Card`)} icon={icon} />)
    return (
        <section className={` min-h-screen flex flex-col   relative   `}>
            <div className='   flex absolute h-full w-full xl:w-full justify-center xl:justify-center items-center ' >
                <span before="KAOTICODE" className=' relative before:content-[attr(before)] inner-shadow text-zinc-300 text-19vh  lg:text-13vw font-extrabold text-vertical xl:text-horizontal'>KAOTICODE</span></div>
            <div className='flex w-full justify-center'>
                <h2 className={`text-5xl font-medium tracking-[.4rem] mt-8 ${styles.title}`}>{t("services")}</h2>
            </div>
            <div className='flex flex-col xl:flex-row justify-center xl:justify-between xl:items-stretch '>
                {cardsList}
            </div>
            <div className='flex flex-1 justify-center items-center font-extralight text-2xl'>
                <p className='flex  max-w-prose'>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex obcaecati, velit fugiat nihil nesciunt possimus illum deserunt. Recusandae nesciunt omnis a! Accusantium sint maiores impedit eaque deleniti nihil optio.&ldquo;
                </p>
            </div>
        </section>
    )
}


