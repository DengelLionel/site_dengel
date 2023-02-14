import Carousel from './Carousel';
import Titulo from './Titulo'
import ContainerGeneral from './ContainerGeneral';
const cards = [
    {
        img: 'https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2017/12/how-to-make-a-website-1.png',
        title: 'Card  uhd',
        color:'bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500',
        description: 'Description for card 1'
      },
    {
      img: 'https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2017/12/how-to-make-a-website-1.png',
      title: 'Card 2',
      color:'bg-gradient-to-t from-green-300 via-blue-500 to-purple-600',
      description: 'Description for card 2'
    },
    {
      img: 'https://d1ih8jugeo2m5m.cloudfront.net/2022/04/tipos-de-paginas-web-1200x685.jpg',
      title: 'Card 3',
      color:'bg-gradient-to-t from-gray-700 via-gray-900 to-black',
      description: 'Description for card 3'
    },
    {
        img: 'https://d1ih8jugeo2m5m.cloudfront.net/2022/04/tipos-de-paginas-web-1200x685.jpg',
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