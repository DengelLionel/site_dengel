import React from 'react'
import ContainerGeneral from './ContainerGeneral'
import Titulo from './Titulo'
import ImagenAccion from './ImagenAccion'
const PlantillasWeb = () => {
  return (
    <ContainerGeneral>
        <Titulo titulo='Mi excelencia en diseño de plantillas'/>
      
        <ImagenAccion image={'https://d1ih8jugeo2m5m.cloudfront.net/2022/04/tipos-de-paginas-web-1200x685.jpg'} tituloButton='Conoce más'/>
    </ContainerGeneral>
  )
}

export default PlantillasWeb