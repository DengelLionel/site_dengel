import React from 'react'
import Image from 'next/image'
import IconArrowDown from '../Icons/IconArrowDown'
import {useContext} from "react"
import { SiteContextVal } from '../../context/SiteContext'
interface card{
    image:string,
    alt:string,
    titulo:string,
    descripcion?:string,
    setOpen:()=>void
}
const CardProjectExperienceMobile = ({image,alt,titulo,descripcion,setOpen}:card) => {
    const {openCardPortfolio,setOpenCardPortfolio}=useContext(SiteContextVal)
  return (
  <section className={`rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] w-[328px]  ${openCardPortfolio===true?'h-auto':'h-[321px]'}  bg-primary mb-[38px] `}>
   
    <Image className={`rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] w-full h-[242px]`} width="328" height="242" sizes='100vw' alt={alt} src={image}/>

    
        <article className='flex justify-between items-center pt-[25px] pl-[16px] pr-[16px] text-textPrimary font-roboto font-extrabold not-italic leading-[28px] tracking-[0.015em] text-[24px]'>
            <h3>{titulo}</h3>
            <IconArrowDown setOpen={setOpen}/>
        </article>
        <article className={`text-textPrimary text-[16px] p-[16px] font-roboto font-normal tracking-[0.015em] ${openCardPortfolio===true?'h-auto opacity-100 visible':'h-0 invisible opacity-0 '}`}>
            <p>
            {openCardPortfolio!==false&&descripcion}
            </p>
           
            </article>
   
  
  </section>
  )
}

export default CardProjectExperienceMobile