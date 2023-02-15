import { useState,useEffect,useRef,memo } from 'react';
import carousel from "../styles/Carousel.module.css"
import Image from 'next/image';
const Carousel = ({cards}:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const handleTouchMove = (event:any) => {
    const touch = event.touches[0];
    const xDiff = touch.clientX - carouselRef.current.offsetLeft;
    if (xDiff < -100) {
      setActiveIndex(activeIndex + 1);
    } else if (xDiff > 100) {
      setActiveIndex(activeIndex - 1);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [activeIndex]);
  return (
    
    <div ref={carouselRef} className="scrollx" onTouchMove={handleTouchMove}>
      {cards.map((card:any,index:any)=>(
         <div key={index}
         className={`transition-transform gap-[20px] duration-300 ${card.color} rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px] flex items-center flex-col p-[20px] rounded-tl-[20px] w-[200px] h-[330px] lg:w-[279px] lg:h-[394px] lg:flex lg:flex-col lg:gap-[20px]  ease-out transform translate-x-${
           activeIndex === index ? 0 : activeIndex < index ? "100" : "-100"
         }`}
       >
         <div className=" w-[160px] h-[160px]  ">
         <Image className="object-cover" width={160} height={160} src={card.img} alt={card.ofrezco} />
         </div>
         <p className={carousel.ofrezco}>Creo páginas informativas de calidad</p>
         <button className={carousel.button}>Conoce más</button>
       </div>
      ))}
     
     
    </div>

  )
}

export default memo(Carousel)