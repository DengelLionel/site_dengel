import React from 'react'
import Titulos from './Titulos'
import CardProjectExperienceDesktop from './CardProjectExperienceDesktop'
const ProyectosExperienceDesktop = () => {
  return (
    <div className='hidden md:flex md:flex-row md:w-[560px]  md:gap-[30px] xl:items-center xl:w-auto '>
        <Titulos titulo="PROYECTOS Y EXPERIENCIAS"/>
        <CardProjectExperienceDesktop/>
    </div>
  )
}

export default ProyectosExperienceDesktop