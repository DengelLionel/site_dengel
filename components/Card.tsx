import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import carousel from "../styles/Carousel.module.css"
const Card = ({img, title, description,className}:any) => {
 

  return (
    <div className={className}>

      
        <Image width={100} height={150} src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      
     
    </div>
  );
};

export default Card;