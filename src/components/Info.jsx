import React, {useState, useEffect} from 'react';
import Menu from './Menu';

const Info = (props) => {
  const [description, setDesc] = useState();
  const [source, setSource] = useState();

  useEffect(() => {
    if (props.planetState === "overview") {
      setDesc(props.description.overview.content)
      setSource(props.description.overview.source)
    } else if (props.planetState === "internal") {
      setDesc(props.description.structure.content)
      setSource(props.description.structure.source)
    } else {
      setDesc(props.description.geology.content)
      setSource(props.description.geology.source)
    }
      
  })
  return (
    <div className="grid row-start-1 row-end-3 col-start-3 col-end-5  m-5 h-[400px]">
      
      <h1 className="uppercase text-5xl font-antonio">{props.name}</h1>
      <h2 className="font-spartan">{description} </h2>
      <p className="font-spartan opacity-50">Source : <a href={source} className="font-bold underline ">Wikipedia</a> <img src="/assets/icon-source.svg" className="inline"/></p>
      <Menu setPlanetState={props.setPlanetState} planetState={props.planetState}/>
     
    </div>
  );
};

export default Info;


