import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { CiLocationArrow1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='h-[80vh] top-28 left-10 ' fill='white' />
        <Spotlight className='h-[120vh] w-[70vw] top-20 left-full' fill='purple' />
        <Spotlight className='h-[120vh] w-[70vw] top-64 left-full' fill='green' />
        <Spotlight className='h-[90vh] w-[50vw] top-24 left-80' fill='blue' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative bottom-40  flex items-start justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className='flex justify-center items-center relative z-10 my-20'>
          <div className='max-w-[80vw] flex flex-col items-center justify-center'>

            <TextGenerateEffect
              words="Transforming Idea's into Web Apps"
            />

            <p className='tracking-wide text-lg'>Namaste! I'm AaraV, a Full Stack Engineer based in Delhi</p>

         <a href="#about">
            <MagicButton 
            title={"See My Work"}
             icon={<CiLocationArrow1/>}
            />
         </a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero