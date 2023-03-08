import ContainerGeneral from './ContainerGeneral'
import formulario from "../styles/Formulario.module.css"

const Formulario = () => {
  return (
 <ContainerGeneral>
    
    <span className='flex flex-col justify-center items-center gap-[6px] lg:gap-[25px] text-center '>

        <span className='font-rowdies font-light text-[24px] leading-[30px] text-center tracking-[0.015em] text-white2 lg:text-[30px] '>Dime lo que necesitas.</span>
       
        <h2 className='font-rowdies font-normal not-italic text-[32px] leading-[40px] text-center tracking-[0.015em] text-white2 lg:text-[50px]'>Yo te ayudo a solucionarlo</h2>
       
    </span>
    
    <form >
                <div className="md:flex items-center ">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label htmlFor="nombre" className='font-roboto font-light text-[20px] leading-[30px] tracking-[0.015em] text-white4 md:text-[24px]'>Nombres:</label>
                        <input id="nombre" type="text" className='leading-none font-roboto font-medium text-[16px] tracking-[0.015em] mt-[16px] border-[2px] border-transparent border-solid bg-black2 p-[8px] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] text-white6 focus:outline-none focus:border-[2px] focus:border-solid focus:bg-focusInput lg:text-[20px] lg:w-[400px]' />
                    </div>
                  
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label htmlFor="email" className='font-roboto font-light text-[20px] leading-[30px] tracking-[0.015em] text-white4 md:text-[24px]'>Email:</label>
                        <input id="email" type="email" className='leading-none font-roboto font-medium text-[16px] tracking-[0.015em] mt-[16px] border-[2px] border-transparent border-solid bg-black2 p-[8px] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] text-white6 focus:outline-none focus:border-[2px] focus:border-solid focus:bg-focusInput lg:text-[20px] lg:w-[400px]'/>
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label htmlFor="mensaje" className='font-roboto font-light text-[20px] leading-[30px] tracking-[0.015em] text-white4 md:text-[24px]'>Mensaje:</label>
                        <textarea id="mensaje" className='mt-[16px] bg-black2 p-[8px] text-white6 border-[2px] border-solid border-transparent rounded-tl-[7px] rounded-tr-[7px] rounded-br-[7px] rounded-bl-[7px] resize-none h-[160px] leading-none not-italic font-roboto font-medium text-[16px] focus:outline-none focus:border-[2px] focus:border-solid focus:border-focusInput lg:text-[20px]'></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className='font-roboto font-bold text-[20px] text-center bg-yellow1 text-azul4 pt-[10px] mt-[20px] pb-[10px] w-[300px]  rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] hover:bg-yellow3 md:text-[24px] md:w-[400px] md:p-[10px] lg:text-[24px] lg:p-[15px]'>
                       Enviar
                    </button>
                </div>
            </form>
    
 </ContainerGeneral>
  )
}

export default Formulario