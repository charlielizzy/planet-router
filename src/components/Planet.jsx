import React from 'react';
import Icon from './Icon';
import Info from './Info';
import Stats from './Stats';

const Planet = () => {
  return (
    <div className="bg-blue-900 grid grid-rows-3 grid-cols-4">
      <Icon src="../public/assets/planet-earth.svg"/>
      <Info name="Earth" description="Earth description"/>
      <Stats />
    </div>
  );
};

export default Planet;