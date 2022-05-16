import React from 'react';
import StatsItem from './StatsItem';

const Stats = () => {
  return (
    <div>
      <h2>STATS</h2>
      <StatsItem title="rotation time"/>
      <StatsItem title="revolution time"/>
      <StatsItem title="radius"/>
      <StatsItem title="average temp."/>
    </div>
  );
};

export default Stats;