import React from 'react'
import { PinContainer, PinPerspective } from './ui/3dPin'

const Projects = () => {
  return (
    <div className='w-full h-[100vh]'>
        <span className='text-6xl font-bold mr-[70vw] text-purple'>Project's.</span>
        <PinContainer>
          <PinPerspective title={"Verzatile - a store"} href={"https://verzatile.onrender.com/"}></PinPerspective>
        </PinContainer>
    </div>
  )
}

export default Projects