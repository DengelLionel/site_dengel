import styles from "../styles/Footer.module.css"
import IconEmail from "./Icons/IconEmail"
import ContenedorDatosFooter from "./ContenedorDatosFooter"
import IconWhatsapp from "./Icons/IconWhatsapp"
import IconTelegram from "./Icons/IconTelegram"
import IconInstagram from "./Icons/IconInstagram"
import IconTiktok from "./Icons/IconTiktok"
const FooterContent = () => {
  return (
   <section className="flex flex-col justify-center items-center">
    <h3 className={styles.titulo}>Contactame</h3>
            <ContenedorDatosFooter>
            <IconEmail/>
           <span>denriveracajincho@gmail.com</span> 
            </ContenedorDatosFooter>

            <ContenedorDatosFooter>
            <IconTelegram/>       
            <IconWhatsapp/>
                <span>+51 977 766 744</span> 
            </ContenedorDatosFooter>
            <ContenedorDatosFooter>
            <IconInstagram/>     
                <span>dengelrivera.dev</span> 
            </ContenedorDatosFooter>

            <ContenedorDatosFooter>
            <IconTiktok/>     
                <span>@dengel_lionel</span> 
            </ContenedorDatosFooter>
           <span className="text-white3">Diseño + Código © 2023</span>
           <span className="text-white3">Términos de política - privacidad del servicio</span>
           <span className="text-white3">Sitio hecho con react js, next js</span>
        
   </section>
  )
}

export default FooterContent