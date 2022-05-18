import React from 'react';

const MenuItem = (props) => {
  return (
    <div className="border-2 my-1 uppercase p-4 text-xs">
      <h3>{props.title}</h3>
    </div>
  );
};

export default MenuItem;