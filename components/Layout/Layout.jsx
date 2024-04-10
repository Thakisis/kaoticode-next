"use client"
import dynamic from 'next/dynamic'
const Canvas = dynamic(() => import('@/components/Canvas'), { ssr: false })
export function Layout({ children }) {


    return (
        <div>
            <Canvas></Canvas>

            {children}

        </div>
    )
}

