import React from 'react';

const StatsItem = (props) => {
  return (
    <div className="bg-blue-900 border-[1px] border-white w-[200px] h-[100px] flex flex-col justify-between p-4">
      <h3 className="text-xs font-spartan">{props.title}</h3>
      <h3 className="font-antonio text-3xl">{props.data}</h3>
    </div>
  );
};

export default StatsItem;