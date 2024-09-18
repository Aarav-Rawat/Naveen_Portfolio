import React from 'react'
import { socialMedia } from '@/data'




const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10">
      <div>
     
      </div>
      <div className='flex w-full items-center justify-center gap-5'>
        {
            socialMedia.map((item)=>(
              <a key={item.id} href={item.link} className='text-center'>
                  <img src={item.img} alt="" />
              </a>
            ))
          }
      </div>
          
    </div>
  )
}

export default Footer