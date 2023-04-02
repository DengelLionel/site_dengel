import Carousel from './Carousel';
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral';
const cards = [
    {
        img: "https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/paginainfo_mwxf1a.png",
        title: 'Páginas web personalizadas',
        color:'bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500',
        href:"/webpersonalizada"
      },
    {
      img: "https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/tienda_ylg91p.png",
      title: 'Tiendas virtuales - ecommerce',
      color:'bg-gradient-to-t from-green-300 via-blue-500 to-purple-600',
      href:"/ecommerce"
    },
    {
      img: "https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/aplicaciones_lsahv0.png",
      title: 'Aplicaciones web personalizadas',
      color:'bg-gradient-to-t from-gray-700 via-gray-900 to-black',
      href:"#"
    },
    {
        img: "https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/asesoria_jwkyxb.png",
        title: 'Asesoramiento personalizado',
        color:'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900',
        href:"#"
      },
      {
        img:"https://res.cloudinary.com/darps1cta/image/upload/v1676772697/sitioweb/sistemasw_oa0zye.png",
        title: 'Sistemas web personalizados',
        color:'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900',
        href:"#"
      }
     
  ];
const LoQueYoOfrezco = () => {
  return (
    <ContainerGeneral>
       <Titulo idd="ofrezco" titulo='Lo que yo ofrezco'/>

        <Carousel cards={cards}/>

    </ContainerGeneral>
  )
}

export default LoQueYoOfrezco