import Carousel from './Carousel';
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral';
const cards = [
    {
        img: 'https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg',
        title: 'Card  uhd',
        color:'bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500',
        description: 'Description for card 1'
      },
    {
      img: 'https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg',
      title: 'Card 2',
      color:'bg-gradient-to-t from-green-300 via-blue-500 to-purple-600',
      description: 'Description for card 2'
    },
    {
      img: 'https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg',
      title: 'Card 3',
      color:'bg-gradient-to-t from-gray-700 via-gray-900 to-black',
      description: 'Description for card 3'
    },
    {
        img: 'https://res.cloudinary.com/darps1cta/image/upload/v1676390679/sitioweb/port_zpstv9.jpg',
        title: 'Card 4',
        color:'bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900',
        description: 'Description for card 4'
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