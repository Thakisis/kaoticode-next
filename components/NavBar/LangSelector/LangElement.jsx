"use client"


import { usePathname, Link } from '@/navigation'




import * as FlagIcons from './FlagIcons'
function LangElement({ locale, langName, selected }) {
    const FlagIcon = FlagIcons[locale.toUpperCase()]
    const pathname = usePathname()
    const checkSelected = locale === selected ? <span className="ml-auto">        ✓    </span> : null
    return (

        <Link
            href={pathname}
            locale={locale}
            className="px-3 py-3 flex  hover:bg-gray-800 no-underline hover:no-underline transition-colors duration-100"
        >
            <FlagIcon className="mr-3 h-4 align-baseline transform translate-y-1 " />
            <span className="inline-block text-white" >{langName}</span>
            {checkSelected}
        </Link>

    )
}

export default LangElement
