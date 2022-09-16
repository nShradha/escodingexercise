import React, { Fragment } from "react";
import { Animate } from '../animate'
import { Delay } from '../delay';
import { RemoveDuplicates } from '../remove-duplicates';

export const CodingExcercise01 = () => {  
  return (
    <Fragment>
        <Delay></Delay> 
        <ColoredLine color='gray' />         
        <Animate></Animate>
        <ColoredLine color='gray' />         
        <RemoveDuplicates></RemoveDuplicates> 
    </Fragment>
  );
};


const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 2,
          marginBottom: 20
      }}
  />
);