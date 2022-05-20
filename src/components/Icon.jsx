import React, { useEffect, useState } from 'react';

const Icon = (props) => {
  const [image, setImage] = useState()

  useEffect(() => {
    if (props.planetState === "overview") {
      setImage(props.images.planet)
    } else if (props.planetState === "internal") {
      setImage(props.images.internal)
    } else {
      setImage(props.images.geology)
    }

  })
 

  
  return (
    <div className="grid row-start-1 row-end-3 col-start-1 col-end-3 m-4 h-[400px] w-[400px] justify-center items-center">
      <img src={`/assets/${image}`}/>
    </div>
  )  
};

export default Icon;