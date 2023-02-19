import ContainerGeneral from './ContainerGeneral'
import formulario from "../styles/Formulario.module.css"
import {Roboto,Rowdies} from '@next/font/google'
const robotoo = Roboto({
  style:["normal"],
  weight:["500","700"],
  subsets:["latin"],
  variable:"--font-roboto"
})
const rowdie = Rowdies({
    style:["normal"],
    weight:["300"],
    subsets:["latin"],
    variable:"--font-rowdies"
  })
  const rowdie2 = Rowdies({
    style:["normal"],
    weight:["700"],
    subsets:["latin"],
    variable:"--font-rowdies"
  })
const Formulario = () => {
  return (
 <ContainerGeneral>
    
    <span className='flex flex-col justify-center items-center gap-[6px] lg:gap-[25px] text-center '>
    <article className={rowdie.variable}>
        <span className={formulario.text1}>Dime lo que necesitas.</span>
        </article>
        <article className={rowdie2.variable}>
        <h2 className={formulario.text2}>Yo te ayudo a solucionarlo</h2>
        </article>
    </span>
    
    <form className={robotoo.variable}>
                <div className="md:flex items-center ">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label htmlFor="nombre" className={formulario.label}>Nombres:</label>
                        <input id="nombre" type="text" className={formulario.input} />
                    </div>
                  
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label htmlFor="email" className={formulario.label}>Email:</label>
                        <input id="email" type="email" className={formulario.input}/>
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label htmlFor="mensaje" className={formulario.label}>Mensaje:</label>
                        <textarea id="mensaje" className={formulario.textarea}></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className={formulario.button}>
                       Enviar
                    </button>
                </div>
            </form>
    
 </ContainerGeneral>
  )
}

export default Formulario