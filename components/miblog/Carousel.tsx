import React from 'react'
import Carousel from "nuka-carousel"
import Image from 'next/legacy/image'

const CarouselBlog = () => {
  return (
    <Carousel adaptiveHeightAnimation={true} adaptiveHeight={true} defaultControlsConfig={{prevButtonText:"<",nextButtonText:'>'}} wrapAround={true} autoplay={true}>
        <section className='relative w-full h-[300px]  '>
        <Image layout='fill' src='https://res.cloudinary.com/darps1cta/image/upload/v1679615808/sitioweb/hombre-adulto-haciendo-compras-linea-dia-ocio-casa-joven-comprando-ropa-online_uuxpql.jpg'/>
        </section>
        <section className='relative w-full h-[300px]'>
        <Image layout='fill' src='https://res.cloudinary.com/darps1cta/image/upload/v1679615808/sitioweb/tecnologia-desarrollo-aplicaciones-comercio-electronico-inalambrico_rz0aoy.jpg'/>
        </section>

       
  </Carousel>
  )
}

export default CarouselBlog