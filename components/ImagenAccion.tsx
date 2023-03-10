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
      <Image className='w-full h-auto' sizes='100vw' priority={true} src={image} width="0" height="0"  alt={alt}/>
      </article>
      <article className={accion.imagenMD}>
      <Image  className='w-full h-auto' sizes='100vw' priority={true}  src={image} width="0" height="0" alt={alt}/>
      </article>
      <article className={accion.imagenLG}>
      <Image className='w-full h-auto' sizes='100vw' priority={true}  src={image}  width="0" height="0" alt={alt}/>
      </article>
       
        <button className='font-roboto font-bold text-[20px] text-center bg-yellow1 text-azul4 pt-[10px] pb-[10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] w-[200px] sm:text-[26px] sm:w-[292px] lg:w-[280px] lg:transition-all lg:duration-[500ms] lg:hover:bg-yellow3 lg:hover:text-azul4 xl:w-[300px]'>{tituloButton}</button>
       
        
    </section>
  )
}

export default ImagenAccion