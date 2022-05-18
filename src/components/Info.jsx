import React from 'react';
import Menu from './Menu';

const Info = (props) => {
  return (
    <div className="grid row-start-1 row-end-3 col-start-3 col-end-5 bg-blue-500 m-5 h-[400px]">
      
      <h1 className="uppercase text-5xl font-antonio">{props.name}</h1>
      <h2 className="font-spartan">{props.description}</h2>
      <Menu />
     
    </div>
  );
};

export default Info;


