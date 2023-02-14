import Card from './Card'
import service from "../styles/CardServicios.module.css"
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
const MisServicios = () => {
  return (
   <ContainerGeneral>
    <Titulo titulo="Mis servicios más Solicitados"/>
    <section className={service.container}>
    <Card titulo='Creo páginas informativas de calidad' image='https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2017/12/how-to-make-a-website-1.png'/>
    <Card titulo='Creo páginas informativas de calidad' image='https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2017/12/how-to-make-a-website-1.png'/>
    </section>
   </ContainerGeneral>
  )
}

export default MisServicios