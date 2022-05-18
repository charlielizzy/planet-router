import React from 'react';
import StatsItem from './StatsItem';

const Stats = () => {
  return (
    <div className="grid row-start-3 row-end-3 col-start-1 col-end-5 m-4 h-[130px] uppercase">
      <div className="flex justify-between">
      <StatsItem title="rotation time" data="0.99 days"/>
      <StatsItem title="revolution time" data="365.26 days"/>
      <StatsItem title="radius" data="6,371 km"/>
      <StatsItem title="average temp." data="16°c"/>
    </div>
  </div>
  );
};

export default Stats;