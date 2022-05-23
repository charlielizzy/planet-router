import React, {useState} from 'react';
// import MenuItem from './MenuItem';

const Menu = (props) => {

  return (
    <div className="flex justify-between font-spartan flex-col w-full">
     
      <button onClick={() => props.setPlanetState("overview")} className={`border-2 my-1 uppercase p-4 text-xs ${props.planetState === "overview" ? "bg-[#6D2ED5]" : ""}` } >
         <h3 >01 Overview</h3>
       </button>

      <button onClick={() => props.setPlanetState("internal")} className={`border-2 my-1 uppercase p-4 text-xs ${props.planetState === "internal" ? "bg-[#6D2ED5]" : ""}` } >
        <h3 >02 Internal Structure</h3>
      </button>

      <button onClick={() => props.setPlanetState("geology")} className={`border-2 my-1 uppercase p-4 text-xs ${props.planetState === "geology" ? "bg-[#6D2ED5]" : ""}` } >
        <h3 >03 Surface Geology</h3>
      </button>
  
    </div>
  );
};

export default Menu;