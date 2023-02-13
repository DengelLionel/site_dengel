import React from 'react'
import ContainerGeneral from './ContainerGeneral'
import formulario from "../styles/Formulario.module.css"
const Formulario = () => {
  return (
 <ContainerGeneral>
    <span className='text-center'>
        <span className={formulario.text1}>Dime lo que necesitas.</span>
        <h2 className={formulario.text2}>Yo te ayudo a solucionarlo</h2>
    </span>
    <form action="" method="post">
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Nombres:</label>
                        <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-azulpalido mt-4 border-0 bg-black2 rounded" />
                    </div>
                  
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Email:</label>
                        <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-azulpalido mt-4 border-0 bg-black2  rounded"/>
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none text-gray-300">Mensaje:</label>
                        <textarea className="h-40 text-base leading-none text-gray-50 p-3 outline-none resize-none focus:border-azulpalido mt-4 bg-black2  border-0 rounded"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 font-semibold leading-none text-blue1 py-4 px-10 bg-yellow2  rounded hover:bg-yellow-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                       Enviar
                    </button>
                </div>
            </form>
    
 </ContainerGeneral>
  )
}

export default Formulario