
import Logo from './Logo'

import { menus } from '@/data'
import { pathnames, Link } from '@/navigation'
import LangSelector from './LangSelector'
import { getTranslator } from '../helpers'


async function NavBar(props) {
    const { t, locale } = await getTranslator('Navigation')

    const MenuLinks = menus.map((menu) => {

        return <Link className="ml-6" href={menu.url} key={menu.url} locale={locale} > {t(menu.text)} </Link>
    })
    return (

        <nav
            className="flex absolute px-3 py-5 h-10 z-30 top-0 left-0 w-screen text-white justify-between "
        >
            <Link className="flex items-center gap-2 p-2" href='/'>
                <Logo className="h-6 "></Logo> KaotiCode
            </Link>
            <div className="flex items-center gap-2 p-2">
                {MenuLinks}
                <LangSelector selected={locale} />
            </div>

        </nav>


    )
}

export default NavBar
