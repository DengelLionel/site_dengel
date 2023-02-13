import React from 'react'
import styles from "../styles/Home.module.css"
interface titulo{
    titulo:string
}
const Titulo = ({titulo}:titulo) => {
  return (
    <h2 className={styles.titulo}>{titulo}</h2>
  )
}

export default Titulo