import React from 'react';

const Nav = () => {
  return (
    <div className="bg-blue-900 text-white h-[100px] flex justify-between items-center border-b-[1px] border-white"> 
      <h1 className="font-antonio text-3xl">THE PLANETS</h1>
      <h1 className="flex items-center justify-center font-spartan">MERCURY VENUS EARTH MARS JUPITER SATURN URANUS NEPTUNE</h1>
    </div>
  );
};

export default Nav;