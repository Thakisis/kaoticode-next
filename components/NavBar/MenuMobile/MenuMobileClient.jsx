"use client"
import { useEffect, useState } from "react"
function MenuMobileClient({ children }) {
    const [isOpen, setOpen] = useState(false)
    const clickHandler = (event) => {
        if (event.target.tagName === "BUTTON")
            return setOpen(!isOpen)
        if (event.target.tagName === "A")
            setOpen(false)
    }

    return (
        <div onClick={clickHandler}>
            <button className="relative navbar-burger flex items-center text-white pr-3 z-50" >
                <svg className="block h-4 w-4 fill-current pointer-events-none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
            <div className={isOpen ? "flex" : "hidden"}>
                {children}
            </div>
        </div>
    )
}

export default MenuMobileClient
