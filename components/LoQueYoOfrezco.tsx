import Carousel from './Carousel';
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral';

import { ReactSVG } from "react-svg";
const cards = [
    {
        img: <ReactSVG src="/tiendavirtual.svg"/>,
        title: 'Páginas web personalizadas',
        color:'bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500',
      
      },
    {
      img: <ReactSVG src="/tiendavirtual.svg"/>,
      title: 'Tiendas virtuales - ecommerce',
      color:'bg-gradient-to-t from-green-300 via-blue-500 to-purple-600',
    
    },
    {
      img: <ReactSVG src="/tiendavirtual.svg"/>,
      title: 'Aplicaciones web personalizadas',
      color:'bg-gradient-to-t from-gray-700 via-gray-900 to-black',
    
    },
    {
        img: <ReactSVG src="/tiendavirtual.svg"/>,
        title: 'Asesoramiento personalizado',
        color:'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900',
        
      },
      {
        img: <ReactSVG src="/tiendavirtual.svg"/>,
        title: 'Sistemas web personalizados',
        color:'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900',
        
      }
     
  ];
const LoQueYoOfrezco = () => {
  return (
    <ContainerGeneral>
       <Titulo titulo='Lo que yo ofrezco'/>

        <Carousel cards={cards}/>

    </ContainerGeneral>
  )
}

export default LoQueYoOfrezco