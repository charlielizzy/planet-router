import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className="text-red-600 flex">
      <h2>MENU</h2>
      <MenuItem title="01 overview"/>
      <MenuItem title="02 internal structure"/>
      <MenuItem title="surface geology"/>
    </div>
  );
};

export default Menu;