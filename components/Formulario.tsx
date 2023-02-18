import ContainerGeneral from './ContainerGeneral'
import formulario from "../styles/Formulario.module.css"
const Formulario = () => {
  return (
 <ContainerGeneral>
    <span className='flex flex-col justify-center items-center gap-[6px] lg:gap-[25px] text-center '>
        <span className={formulario.text1}>Dime lo que necesitas.</span>
        <h2 className={formulario.text2}>Yo te ayudo a solucionarlo</h2>
    </span>
    <form>
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