import React from 'react'
import Image from 'next/image'
const CardProjectExperienceDesktop = () => {
  return (
  <picture className='md:w-[300px] md:h-[250px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]'>
    <source src={`https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg`} />
    <Image className='w-full h-full  rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' sizes='100vh' alt='card' width="0" height="0" src={`https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg`}/>
    <article className='w-full h-[119px] mt-auto z-[20] rounded-bl-[20px] rounded-br-[20px] bg-blackDegradado text-white2'>
        <h3>Dedicados System</h3>
    </article>
  </picture>
  )
}

export default CardProjectExperienceDesktop