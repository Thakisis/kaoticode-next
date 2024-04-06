import Image from 'next/image'
import './HeroTitle.css'
import { getTranslator } from '../helpers'




async function Hero(props) {
    const { t } = await getTranslator('Index')
    return (
        <section>

            <div>
                <div className="z-10 relative items-center justify-center  w-screen h-screen">
                    <div>
                        <div className="absolute inset-0  h-screen">
                            <Image src='/images/code.jpg' fill className='codeImage' alt="Image showing Code" />
                        </div>
                        <div className="absolute inset-0  h-screen">
                            <Image src='/images/code.jpg' fill className='codeImageBlur' alt="Image showing Code" />
                        </div>
                        <div
                            data-aos="flip-down"
                            className="absolute inset-0  z-30 container flex flex-col items-center justify-center h-full max-w-6xl pl-0 mx-auto  sm:pl-8 xl:pl-0 md:flex-row md:justify-between"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
