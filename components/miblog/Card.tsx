import React from 'react'
import Image from "next/legacy/image"
const Card = () => {
  return (
    <section className='w-full h-[365px] rounded-[5px] bg-gray3 scale-95 hover:scale-100 shadow-shadow1'>
        <div className='relative w-full h-[213px]'>
            <Image className='rounded-tl-[5px] rounded-tr-[5px]' layout='fill' alt={`image`} src={`https://res.cloudinary.com/darps1cta/image/upload/v1679615808/sitioweb/hombre-adulto-haciendo-compras-linea-dia-ocio-casa-joven-comprando-ropa-online_uuxpql.jpg`}/>
        </div>
        <div className='pr-[19px] pt-[8px] pb-[19px] pl-[19px]'>
            <h3 className='font-roboto font-medium text-azul2 text-[14px]'>Negociación</h3>
            <h1 className='font-roboto font-semibold text-azul2 text-[24px]'>Proceso de negociación: Domina y cierra mas tratos</h1>
        </div>
    </section>
  )
}

export default Card