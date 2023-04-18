import React from 'react'
import CarouselBlog from './Carousel'
import Image from 'next/legacy/image'
import Card from './Card'
const MiBlogBody = () => {
  return (
    <div>
        <section className='w-full md:flex md:flex-row md:gap-[30px] lg:w-[800px] lg:justify-center lg:items-center'>
         
        <div className='md:w-[50%] md:h-[50%] md:bg-blue-500'>
        <CarouselBlog/>
        </div>
        
        <div className='md:w-[50%] md:h-[452px] md:bg-white2 lg:w-auto lg:h-auto'>
        
          <h3 className='bg-yellow2 text-center flex justify-center items-center text-azul2 md:text-center font-rowdies h-[35px] md:w-[218px] md:h-[55px] md:mb-[22px]'> Publicaciones más populares</h3>
          <div className='p-[16px] md:hidden'>
          <section className='bg-gray2 w-full h-full rounded-[5px] flex flex-row gap-[14px] '>
            <div className='relative w-[112px] h-[85px]'>
            <Image className='rounded-tl-[5px] rounded-bl-[5px]' layout='fill' alt={`image`} src={`https://res.cloudinary.com/darps1cta/image/upload/v1679615808/sitioweb/hombre-adulto-haciendo-compras-linea-dia-ocio-casa-joven-comprando-ropa-online_uuxpql.jpg`}/>
            </div>
            <article className='flex justify-center items-center text-azul2 text-left font-roboto font-normal'>
            ¿Qué es un precio psicológico? Estrategias y ejemplos
            </article>
          </section>
          </div>
        
          <div className='hidden md:flex md:flex-col md:gap-[15px]'>
          <section className='md:bg-gray2 md:w-full  md:h-[94px] md:rounded-[5px] md:flex md:flex-row md:gap-[16px] lg:w-[385px]'>
          <div className='relative w-[112px] h-full'>
            <Image className='rounded-tl-[5px] rounded-bl-[5px]' layout='fill' alt={`image`} src={`https://res.cloudinary.com/darps1cta/image/upload/v1679615808/sitioweb/hombre-adulto-haciendo-compras-linea-dia-ocio-casa-joven-comprando-ropa-online_uuxpql.jpg`}/>
            </div>
            <article className='flex justify-center items-center text-azul2 text-left font-roboto font-normal'>
            ¿Qué es un precio psicológico? Estrategias y ejemplos
            </article>
          </section>
          
          </div>

        </div>
        </section>
        <div className='p-[16px]'>
        <Card/>
        </div>
      
    </div>
  )
}

export default MiBlogBody