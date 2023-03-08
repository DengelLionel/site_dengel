import IconEmail from "./Icons/IconEmail"
import ContenedorDatosFooter from "./ContenedorDatosFooter"
import IconWhatsapp from "./Icons/IconWhatsapp"
import IconTelegram from "./Icons/IconTelegram"
import IconInstagram from "./Icons/IconInstagram"
import IconTiktok from "./Icons/IconTiktok"
import IconLogomas1024 from "./Icons/IconLogomas1024"
import IconLogo from "./Icons/IconLogo"
import Link from "next/link"

const FooterContent = () => {
  return (
   <section className="flex flex-col justify-center items-center ">
 
    <h3 className='font-rowdies font-light text-[26px] leading-[40px] tracking-[0.015em] p-[16px] text-white2'>Contactame</h3>
    
    
    <section className=" lg:flex lg:flex-row lg:gap-[50px]"> 
    <ContenedorDatosFooter>
    <IconLogomas1024/>
    </ContenedorDatosFooter>
            <ContenedorDatosFooter>
            <Link href="mailto:denriveracajincho@gmail.com?Subject=Quiero%20contactarme%20contigo%20Dengel" aria-label="Redirecciona a gmail" target="_blank"><IconEmail/></Link>
            <Link href="https://t.me/dengeldev"  aria-label="Redirecciona a telegram" target="_blank"><IconTelegram/></Link>
            <Link href="ttps://wa.me/+51977766744?text=Hola%20quiero%20más%20einformación" target="_blank"  aria-label="Redirecciona a whatsapp"> <IconWhatsapp/></Link>      
            <Link href="https://www.instagram.com/dengelrivera.dev/" target="_blank"  aria-label="Redirecciona a instagram"><IconInstagram/> </Link>
            <Link href="https://www.tiktok.com/@dengel_lionel?is_from_webapp=1&sender_device=pc"  aria-label="Redirecciona a tiktok" target="_blank"><IconTiktok/></Link>
            </ContenedorDatosFooter>
         
           </section>
           
            <section className='font-roboto font-light text-[16px] text-white2 text-center tracking-[0.015em] flex flex-col items-center gap-[18px] '>
            <span className="text-white3">Diseño + Código © 2023</span>
           <Link className="text-white3" href="#" target="_blank">Términos de política - privacidad del servicio</Link>
           <span className="text-white3">Sitio hecho con react js, next js</span>
            
          
           </section>
          
   </section>
  )
}

export default FooterContent