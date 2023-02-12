import React from 'react'
import styles from "../styles/Home.module.css"

const MisServicios = () => {
  return (
   <section className='mt-[62px] pb-[34px] '>
    <h2 className={styles.misServicios}>Mis servicios más Solicitados</h2>
    <section className='w-full flex justify-center mt-[30px]'>
    <article className='w-[328px] h-[187px] bg-white2 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] rounded-tl-[20px] flex flex-row justify-center items-center gap-[6px]'>
      <article className='w-[133px] h-[175px] rounded-tl-[20px] rounded-bl-[20px] bg-red-400'>

      </article>
      <article className='w-[177px] h-[175px] bg-primary rounded-tr-[20px] rounded-br-[20px]'>

      </article>
    </article>
    </section>
   </section>
  )
}

export default MisServicios