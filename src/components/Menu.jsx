import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className="flex justify-between font-spartan">
      <div className="flex flex-col w-full">
      <MenuItem title="01 overview"/>
      <MenuItem title="02 internal structure"/>
      <MenuItem title="03 surface geology"/>
      </div>
    </div>
  );
};

export default Menu;