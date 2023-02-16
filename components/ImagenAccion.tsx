import Image from 'next/image'
import styles from '../styles/Home.module.css'
import accion from '../styles/Imagenaccion.module.css'
interface accion{
    image:string,
    tituloButton:string,
    alt:string
}
const ImagenAccion = ({image,tituloButton,alt}:accion) => {
  return (
    <section className='flex flex-col justify-center items-center h-auto gap-[20px] '>
      <article className={accion.imagenSM }>
      <Image className='w-full h-auto' sizes='100vw' priority src={image} width="0" height="0" alt={alt}/>
      </article>
      <article className={accion.imagenMD}>
      <Image  className='w-full h-auto' sizes='100vw' priority src={image} width="0" height="0" alt={alt}/>
      </article>
      <article className={accion.imagenLG}>
      <Image className='w-full h-auto' sizes='100vw' priority  src={image}  width="0" height="0" alt={alt}/>
      </article>
        
        <button className={styles.button}>{tituloButton}</button>
    </section>
  )
}

export default ImagenAccion