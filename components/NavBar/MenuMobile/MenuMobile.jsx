import './menuMobile.css'
import { Link } from '@/navigation'
import MenuMobileClient from './MenuMobileClient'
import { menus } from '@/data'
import { getTranslator } from '@/components/helpers'
import { Playfair } from 'next/font/google'
const playfair = Playfair({ subsets: ["latin"] })

async function MenuMobile(props) {
    const { t, locale } = await getTranslator('Navigation')

    const MenuLinks = menus.map((menu) =>
    (

        <Link className="flex relative flex-col" href={menu.url} key={menu.url} locale={locale} >
            <span className={`${playfair.className} font-bold text-4xl pointer-events-none`}>{t(menu.text)} </span>
            <span className="pl-5  text-slate-500 pointer-events-none">{t(`${menu.text}Quote`)}</span>
        </Link>
    )
    )
    return (
        <div className="lg:hidden items-center gap-2">
            <MenuMobileClient className="relative navbar-burger flex items-center text-white pr-3 z-50">
                <div className='fixed  pb-5 flex flex-col bg-gray-900 inset-0 z-30  w-full items-center '>
                    <div className=' py-5 flex flex-col  flex-1 justify-around'>
                        {MenuLinks}
                    </div>
                    <div>english</div>
                    <div>spanish</div>
                </div>
            </MenuMobileClient>

        </div>
    )
}

export default MenuMobile
