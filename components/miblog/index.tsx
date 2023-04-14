import React from 'react'
import CarouselBlog from './Carousel'
const MiBlogBody = () => {
  return (
    <div>
        <section className='w-full md:flex md:flex-row md:gap-[30px]'>
        <div className='md:w-[50%] md:h-[452] md:bg-blue-500'>
        <CarouselBlog/>
        </div>
        
        <div className='md:w-[50%] md:h-[452] md:bg-blue-500'></div>
        </section>
       
    </div>
  )
}

export default MiBlogBody