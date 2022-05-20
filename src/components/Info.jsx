import React, {useState, useEffect} from 'react';
import Menu from './Menu';

const Info = (props) => {
  const [description, setDesc] = useState()

  useEffect(() => {
    if (props.planetState === "overview") {
      setDesc(props.description.overview.content)
    } else if (props.planetState === "internal") {
      setDesc(props.description.structure.content)
    } else {
      setDesc(props.description.geology.content)
    }
console.log(description)
  })
  return (
    <div className="grid row-start-1 row-end-3 col-start-3 col-end-5  m-5 h-[400px]">
      
      <h1 className="uppercase text-5xl font-antonio">{props.name}</h1>
      <h2 className="font-spartan">{description}</h2>
      <Menu setPlanetState={props.setPlanetState}/>
     
    </div>
  );
};

export default Info;


