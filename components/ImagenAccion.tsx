import Image from 'next/image'
import styles from '../styles/Home.module.css'
import accion from '../styles/Imagenaccion.module.css'
import {Roboto} from '@next/font/google'
const robotoo = Roboto({
  style:["normal"],
  weight:["400","700"],
  subsets:["latin"],
  variable:"--font-roboto"
})
interface accion{
    image:string,
    tituloButton:string,
    alt:string
}

const ImagenAccion = ({image,tituloButton,alt}:accion) => {
  return (
    <section className='flex flex-col justify-center items-center h-auto gap-[20px] '>
      <article className={accion.imagenSM }>
      <Image className='w-full h-auto' sizes='100vw' priority={true} src={image} width="0" height="0"  alt={alt}/>
      </article>
      <article className={accion.imagenMD}>
      <Image  className='w-full h-auto' sizes='100vw' priority={true}  src={image} width="0" height="0" alt={alt}/>
      </article>
      <article className={accion.imagenLG}>
      <Image className='w-full h-auto' sizes='100vw' priority={true}  src={image}  width="0" height="0" alt={alt}/>
      </article>
        <article className={robotoo.variable}>
        <button className={styles.button}>{tituloButton}</button>
        </article>
        
    </section>
  )
}

export default ImagenAccion