import Image from 'next/image'
import styles from "../styles/CardServicios.module.css"
import IconStar from './Icons/IconStar'
interface cards{
  image:string,
  titulo:string,
}
const Card = ({image,titulo}:cards) => {
  return (
    <div>
    <section className={styles.card}>
      <article className={styles.content1}>
      <Image  className="w-full h-auto" priority={true}  sizes="100vw" src={image} width="0" height="0" alt={titulo}/>
      </article>
      <article className={styles.content2}>
        <h3 className={styles.text}> {titulo}</h3>
      </article>
    </section >

    <section className={styles.card1024}>
      <article className={styles.content}>
    
      <Image className="w-[300px] h-auto" priority={true} sizes="100vw" src={image} width="0" height="0" alt={titulo}/>
     
        <h3 className={styles.text}>{titulo}</h3>
        <article className={styles.IconStart}>
        <IconStar/>
        </article>
       
      </article>
     
    </section >

    </div>
   
  )
}

export default Card