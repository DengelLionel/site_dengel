import React from 'react'
import styles from '../styles/TrabajarConmigo.module.css'
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
const PorqueTrabajarConmigo = () => {
  return (
    <ContainerGeneral>
        <Titulo titulo='¿Por qué Escoger Trabajar Conmigo?'/>
        <article className='rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] bg-blue2 border-[.5px] border-border1 p-[14px] '>
            <p className={styles.parrafo}>Te ofrezco un enfoque amigable y colaborativo en el desarrollo de soluciones digitales y páginas informativas. Mi experiencia y habilidades aseguran un resultado de calidad que superará tus expectativas. ¡Trabajemos juntos para alcanzar el éxito en tus proyectos!</p>
        </article>
    </ContainerGeneral>
  )
}

export default PorqueTrabajarConmigo