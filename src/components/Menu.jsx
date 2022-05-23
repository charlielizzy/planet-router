import React, {useState} from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';

const Menu = (props) => {
  
  // const params = useParams()

  return (
    <div className="flex justify-between font-spartan flex-col w-full">
     

     {/* make colour when clicked different depending on which planet it is */}
      <button onClick={() => props.setPlanetState("overview")} className={`border-[0.5px] my-1 uppercase p-4 text-xs hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:border-0 ${props.planetState === "overview" ? "bg-[#6D2ED5] border-none hover:bg-[#6D2ED5] hover:bg-opacity-100" : ""}` } >
         <h3 >01 Overview</h3>
       </button>

      <button onClick={() => props.setPlanetState("internal")} className={`border-[0.5px] my-1 uppercase p-4 text-xs hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:border-0 ${props.planetState === "internal" ? "bg-[#6D2ED5] border-none hover:bg-[#6D2ED5] hover:bg-opacity-100" : ""}` } >
        <h3 >02 Internal Structure</h3>
      </button>

      <button onClick={() => props.setPlanetState("geology")} className={`border-[0.5px] my-1 uppercase p-4 text-xs hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:border-0 ${props.planetState === "geology" ? "bg-[#6D2ED5] border-none hover:bg-[#6D2ED5] hover:bg-opacity-100" : ""}` } >
        <h3 >03 Surface Geology</h3>
      </button>

      {/* <Button title="01 Overview" onClick={() => props.setPlanetState("overview")}/> */}
  
    </div>
  );
};

export default Menu;