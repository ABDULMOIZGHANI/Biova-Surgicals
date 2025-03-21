import React from 'react'
import Button from './Button'
import SplitText from './SplitText';

const MainSection = () => {

    const handleAnimationComplete = () => { };

    return (
        <section className='relative'>
            <section className='h-auto md:h-[100vh] flex flex-col md:flex-row justify-between items-center w-[100%] lg:w-[80%] md:w-[90%] m-auto md:pt-[0px] pt-[70px] md:pb-[0px] pb-[70px]'>
                <div className='w-[95%] md:w-[50%] flex flex-col gap-[20px]'>
                    <div>
                        <p className='lato text-[#00625F] font-bold text-[16px]'>Trusted by Healthcare Professionals</p>
                        <SplitText
                            text="Premium Surgical & Medical Equipment "
                            className="playfair text-[30px] md:text-[40px] font-bold text-[#00625F] leading-tight"
                            delay={80}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />

                    </div>
                    <p className='lato text-[18px] text-[#00625F] font-regular'>Explore our high-quality nebulizers and advanced medical instruments, designed for precision and care. Get the best deals with up to 35% OFF!</p>
                    <div>
                        <Button value="SHOP NOW & SAVE 35%" />
                    </div>
                </div>

                <div>
                    <img src="/Home/Home Main Image.png" alt="" className='h-auto sm:h-[535px] md:mt-[0px] mt-[60px]' />
                </div>
            </section>

            <img src="/Home/Beats.png" alt="" className='absolute top-[-20px] left-[-10px] z-[-2] h-[70px] md:h-[100px]' />
            <img src="/Home/first aid.png" alt="" className='hidden md:block absolute top-[20px] right-[180px] z-[-2] h-[64.73px]' />
            <img src="/Home/Heart Beat.png" alt="" className='absolute bottom-[-20px] right-[10px] z-[-2] h-[60px] md:h-[106.85px]' />
            <img src="/Home/Medical Instrument (injection).png" alt="" className='absolute top-[20px] right-[0px] z-[-2] h-[70px] md:h-[106.85px]' />
            <img src="/Home/img01.png" alt="" className='absolute bottom-[20px] left-[-10px] z-[-2] h-[158px]' />
        </section>
    )
}

export default MainSection
