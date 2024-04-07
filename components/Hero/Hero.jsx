import Image from 'next/image'
import './HeroTitle.css'
import { getTranslator } from '../helpers'




async function Hero(props) {
    const { t } = await getTranslator('Index')
    return (
        <section>


            <div className="z-10 relative items-center justify-center ">
                <div className='w-full h-screen'>
                    <div className="absolute inset-0">
                        <Image src='/images/code.jpg' fill className='codeImage' alt="Image showing Code" />
                    </div>
                    <div className="absolute inset-0    ">
                        <Image src='/images/code.jpg' fill className='codeImageBlur' alt="Image showing Code" />
                    </div>
                    <div

                        className="relative w-full   z-30 container flex flex-col items-center justify-center h-screen max-w-6xl pl-0 mx-auto  sm:pl-8 xl:pl-0 md:flex-row md:justify-between"
                    >
                        <div className="flex flex-col items-center justify-center mx-auto">
                            <div className="relative text-center ">
                                <h1 className="textcol text-white relative mb-4 text-6xl font-bold font-sans italic leading-none text-center lg:text-9xl xl:text-9xl">
                                    <span className="kaoti">Kaoti</span><span className="dot">.</span><span className='code'>Code</span><span>:</span><span className="cursor">|</span>
                                </h1>
                                <p className="text-gray-200 text-sm lg:text-3xl lg:text-center font-sans italic">
                                    {t('herosub')}
                                </p>
                            </div>
                            <div className='absolute bottom-9'>
                                <button className="inline-flex h-16 animate-shimmer items-center justify-center rounded-md border border-slate-5    00 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    Comprar Codigos
                                </button>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section >
    )
}

export default Hero
