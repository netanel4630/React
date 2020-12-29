import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

//***************************************************/
//in order to render list - we need to add key to img
const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image= {image} />;
  });

  return <div className = "image-list">{images}</div>;
};

export default ImageList;
