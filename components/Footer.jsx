import React from 'react'
import { socialMedia } from '@/data'
import { MagicButton } from './ui/MagicButton'
import { SiGmail } from "react-icons/si";



const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10">
      <div>
     
      </div>
      <div className='flex w-full items-center justify-center gap-5'>
        {
            socialMedia.map((item)=>(
              <a href={item.link} className='text-center'>
                  <img src={item.img} alt="" />
              </a>
            ))
          }
      </div>
          
    </div>
  )
}

export default Footer