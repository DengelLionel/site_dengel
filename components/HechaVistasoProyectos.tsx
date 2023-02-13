import React from 'react'
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral'
import service from "../styles/CardServicios.module.css"
import Card from './Card'
const HechaVistasoProyectos = () => {
  return (
   <ContainerGeneral>
   <Titulo titulo='Echa un vistazo a mis proyectos'/>
   <section className={service.container}>
   <Card titulo='Creo páginas informativas de calidad' image='https://d1ih8jugeo2m5m.cloudfront.net/2022/04/tipos-de-paginas-web-1200x685.jpg'/>
   <Card titulo='Creo páginas informativas de calidad' image='https://d1ih8jugeo2m5m.cloudfront.net/2022/04/tipos-de-paginas-web-1200x685.jpg'/>
   </section>
   </ContainerGeneral>
  )
}

export default HechaVistasoProyectos