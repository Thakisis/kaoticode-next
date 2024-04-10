import GlassWeb from '@/components/GlassWeb'
import styles from './ShowCaseIndex.module.scss'
import { promises as fs } from 'fs'
import { getTranslator } from '@/components/helpers'
export async function ShowCaseIndex(props) {
    const { t } = await getTranslator('Index')

    return (
        <section className={` min-h-screen flex flex-col   relative   `}>

            <div className='flex w-full justify-center'>
                <h2 className={`text-5xl font-medium tracking-[.4rem] mt-8 ${styles.title}`}>{t("clients")}</h2>
            </div>
            <div className='   flex absolute h-full w-full xl:w-full justify-center xl:justify-center items-center ' >
                <span before="KAOTICODE" className='relative inner-shadow-images  text-19vh  lg:text-13vw font-extrabold text-vertical xl:text-horizontal before:content-[attr(before)] '>
                    KAOTICODE
                </span>

            </div>

            <div className='flex flex-1 items-center justify-evenly flex-wrap gap-9 mt-5'>
                <ProjectList />
            </div>

        </section>
    )
}


async function ProjectList() {
    const { t } = await getTranslator('Projects')
    const file = await fs.readFile(process.cwd() + '/app/data/Projects.json', 'utf8')
    const data = JSON.parse(file)
    return data.map(({ Id, name, preview }) => <GlassWeb image={`/images/Projects/${preview}.webp`} title={t(name)} key={Id} />)
}
