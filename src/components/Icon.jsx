import React, { useEffect, useState } from 'react';

const Icon = (props) => {
  const [image, setImage] = useState()
  const [layerImage, setLayerImage] = useState()

  useEffect(() => {
    if (props.planetState === "overview") {
      setImage(props.images.planet)
      setLayerImage(null)
    } else if (props.planetState === "internal") {
      setImage(props.images.internal)
      setLayerImage(null)
    } else {
      setImage(props.images.planet)
      setLayerImage(props.images.geology);
    }

  })
 
  
  return (
    <div className="grid row-start-1 row-end-3 col-start-1 col-end-3 m-4 h-[400px] w-[400px] justify-center items-center absolute">
      <img src={`/assets/${image}`}/>
      {layerImage === null ? null : <img src={`/assets/${layerImage}`} className="w-[129px] absolute z-30 m-[137px] mt-[400px]"/>}
    </div>
  )  
};

export default Icon;