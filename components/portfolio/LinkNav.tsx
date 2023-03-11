import Link from "next/link"
import { useEffect } from "react"
interface link{
    Icon?:any,
    text:string,
    href:any
  }
 
const LinkNav = ({Icon,text,href}:link) => {
  const Scroll=(elemento:any)=>{
    const destino=document.querySelector(elemento)
    destino.scrollIntoView({
      behavior:'smooth'
    })
  }
  useEffect(()=>{


  },[])
  
  return (
    <span className="text-white2 flex items-center w-auto gap-[20px]" onClick={()=>Scroll(href)}>
      {Icon}
      {text}
    </span>
  )
}

export default LinkNav