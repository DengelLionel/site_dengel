import { Rowdies } from "@next/font/google"
import styles from "../styles/Home.module.css"
interface titulo{
    titulo:string
}
const rowdie=Rowdies({
  weight:["400","700"],
  style:["normal"],
  subsets:['latin'],
  variable:"--font-rowdies"
})
const Titulo = ({titulo}:titulo) => {
  return (
    <article className={rowdie.variable}>
      <h2 className={styles.titulo}>{titulo}</h2>
    </article>
    
  )
}

export default Titulo