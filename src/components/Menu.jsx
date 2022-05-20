import React, {useState} from 'react';
// import MenuItem from './MenuItem';

const Menu = () => {

  const [planetState, setPlanetState] = useState()

  return (
    <div className="flex justify-between font-spartan flex-col w-full">
     
      <button onClick={() => setPlanetState("overview")} className="border-2 my-1 uppercase p-4 text-xs" >
         <h3 >01 Overview</h3>
       </button>

      <button onClick={() => setPlanetState("internal")} className="border-2 my-1 uppercase p-4 text-xs" >
        <h3 >02 Internal Structure</h3>
      </button>

      <button onClick={() => setPlanetState("geology")} className="border-2 my-1 uppercase p-4 text-xs" >
        <h3 >03 Surface Geology</h3>
      </button>
  
    </div>
  );
};

export default Menu;