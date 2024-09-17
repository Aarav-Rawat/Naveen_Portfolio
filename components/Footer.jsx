import React from 'react'
import { FloatingDock } from './ui/FloatingDock'
import { socialMedia } from '@/data'



const Footer = () => {
  return (
    <div className="h-[40vh] w-full flex justify-center">
        {
            socialMedia.map((item)=>(

                <FloatingDock key={1} item={item}></FloatingDock>
            ))
        }
    </div>
  )
}

export default Footer