import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import accion from '../styles/Imagenaccion.module.css'
interface accion{
    image:string,
    tituloButton:string
}
const ImagenAccion = ({image,tituloButton}:accion) => {
  return (
    <section className='flex flex-col justify-center items-center gap-[20px] '>
      <article className={accion.imagenSM}>
      <Image style={{'objectFit':'cover'}} src={image} width={195} height={250} alt={tituloButton}/>
      </article>
      <article className={accion.imagenMD}>
      <Image style={{'objectFit':'cover'}}  src={image} width={416} height={270} alt={tituloButton}/>
      </article>
      <article className={accion.imagenLG}>
      <Image style={{'objectFit':'cover'}}  src={image} width={460} height={300} alt={tituloButton}/>
      </article>
        
        <button className={styles.button}>{tituloButton}</button>
    </section>
  )
}

export default ImagenAccion