import styles from "../styles/Footer.module.css"
import IconEmail from "./Icons/IconEmail"
import ContenedorDatosFooter from "./ContenedorDatosFooter"
import IconWhatsapp from "./Icons/IconWhatsapp"
import IconTelegram from "./Icons/IconTelegram"
import IconInstagram from "./Icons/IconInstagram"
import IconTiktok from "./Icons/IconTiktok"
import Link from "next/link"
const FooterContent = () => {
  return (
   <section className="flex flex-col justify-center items-center">
    <h3 className={styles.titulo}>Contactame</h3>
            <ContenedorDatosFooter>
            <Link href="mailto:denriveracajincho@gmail.com?Subject=Quiero%20contactarme%20contigo%20Dengel" target="_blank"><IconEmail/></Link>
            <Link href="https://t.me/dengeldev" target="_blank"><IconTelegram/></Link>
            <Link href="ttps://wa.me/+51977766744?text=Hola%20quiero%20más%20einformación" target="_blank"> <IconWhatsapp/></Link>      
            <Link href="https://www.instagram.com/dengelrivera.dev/" target="_blank"><IconInstagram/> </Link>
            <Link href="https://www.tiktok.com/@dengel_lionel?is_from_webapp=1&sender_device=pc" target="_blank"><IconTiktok/></Link>
              
              
            </ContenedorDatosFooter>

           <span className="text-white3">Diseño + Código © 2023</span>
           <span className="text-white3">Términos de política - privacidad del servicio</span>
           <span className="text-white3">Sitio hecho con react js, next js</span>
        
   </section>
  )
}

export default FooterContent