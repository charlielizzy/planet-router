import React from 'react';

const Icon = (props) => {
  return (
    <div className="grid row-start-1 row-end-3 col-start-1 col-end-3 bg-blue-500 m-4 h-[100px] w-[100px]">
      <h2>ICON</h2>
      <img src={props.src}/>
    </div>
  );
};

export default Icon;