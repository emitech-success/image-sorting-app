import React from "react";
import './ImageList.css'
import ImageCard from "./ImageCard";

const ImageList = (props) =>{
  // console.log(props.images)
// const cars = props.images
 const carImages = props.images.map(image =>{
    return <ImageCard key={image.id} image={image}/>
  })

  return <div className="image_list">
    {carImages}
    </div>
}

export  default ImageList