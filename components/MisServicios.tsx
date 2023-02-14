import Card from './Card'
import service from "../styles/CardServicios.module.css"
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
const MisServicios = () => {
  return (
   <ContainerGeneral>
    <Titulo titulo="Mis servicios más Solicitados"/>
    <section className={service.container}>
    <Card titulo='Creo páginas informativas de calidad' image='https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg'/>
    <Card titulo='Creo páginas informativas de calidad' image='https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg'/>
    </section>
   </ContainerGeneral>
  )
}

export default MisServicios