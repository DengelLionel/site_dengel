import { useState,useEffect,useRef,memo } from 'react';
import carousel from "../styles/Carousel.module.css"
import Image from 'next/image';
const Carousel = ({cards}:any) => {

  return (
    
    <div  className="scrollx">
      {cards.map((card:any,index:any)=>(
         <div key={index}
         className={`transition-transform gap-[20px] duration-300 ${card.color} rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px] flex items-center flex-col p-[20px] rounded-tl-[20px] w-[200px] h-[340px] lg:w-[279px] lg:h-[394px] lg:flex lg:flex-col lg:gap-[20px] `}
       >
       
        {/*  <Image className="w-[160px] h-[160px]" priority={true} width={0} height={0} src={card.img} alt={card.title} /> */}
       
         <p className={carousel.ofrezco}>{card.title}</p>
         <button className={carousel.button}>Conoce más</button>
       </div>
      ))}
     
     
    </div>

  )
}

export default memo(Carousel)