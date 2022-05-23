import React from 'react';
import StatsItem from './StatsItem';
// import Data from "./data.json"

const Stats = (props) => {

  return (
    <div className="grid row-start-3 row-end-3 col-start-1 col-end-5 m-4 h-[130px] uppercase">
      <div className="flex justify-around">
      <StatsItem title="rotation time" data={props.rotation}/>
      <StatsItem title="revolution time" data={props.revolution}/>
      <StatsItem title="radius" data={props.radius}/>
      <StatsItem title="average temp." data={props.temperature}/>
    </div>
  </div>
  );
};

export default Stats;