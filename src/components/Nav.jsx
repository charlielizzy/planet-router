import React from 'react';
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className="text-white h-[100px] flex justify-between items-center border-b-[1px] border-white p-10 mb-5"> 
      <h1 className="font-antonio text-3xl">THE PLANETS</h1>
      <div className="flex items-center justify-around font-spartan uppercase p-2">
        <Link to="/mercury" className="p-1">Mercury</Link>
        <Link to="/venus" className="p-1">Venus</Link>
        <Link to="/earth" className="p-1">Earth</Link>
        <Link to="/mars" className="p-1">Mars</Link>
        <Link to="/jupiter" className="p-1">Jupiter</Link>
        <Link to="/saturn" className="p-1">Saturn</Link>
        <Link to="/uranus" className="p-1">Uranus</Link>
        <Link to="/neptune" className="p-1">Neptune</Link>
        
      </div>
    </div>
  );
};

export default Nav;