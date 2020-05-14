import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
    // whole content can be accessed using props.children for an component
      {props.children}
      // thus using it to display in way we want by wrapping it with scroll component
    </div>
  );
};

export default Scroll;