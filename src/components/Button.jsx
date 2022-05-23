import React, {useState} from 'react';

const Button = (props) => {

  return (
    <div>
      <button className={`border-[0.5px] my-1 uppercase p-4 text-xs hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:border-0 ${props.planetState === "geology" ? "bg-[#6D2ED5] border-none hover:bg-[#6D2ED5] hover:bg-opacity-100" : ""}` } >
        <h3 >{props.title}</h3>
      </button>
  
    </div>
  );
};

export default Button;

// onClick={() => props.setPlanetState("overview")} 