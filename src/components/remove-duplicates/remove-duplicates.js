import React, { Fragment } from "react";
import './styles.css';

export const RemoveDuplicates = () => {  
  const numArray = [23, 12, 1, 3, 4, 4, 5, 6, 35, 23, 23, 4, 200, 345, 34, 23, 35, 43, 23 ,21 , 12]
  const strArray = ['Apple', 'Orange', 'Tomato', 'Grape', 'Mango', 'Orange', 'Tomato', 'Grape', 'Pineapple']
  return (
    <Fragment>
      <div className="number-display">  
         <p> Input Array of Numbers : [{numArray.sort((a, b) => a-b).map(i =>  i + ' ').join(',').trimEnd(',')}]</p>

         <p> Output Array of Numbers : [{numArray.filter((item,index) => numArray.indexOf(item) === index).map(i =>  i + ' ').join(',').trimEnd(',')} ]</p>
      </div>

      <div className="number-display">  
         <p> Input Array of Strings : [{strArray.sort((a, b) => a-b).map(i =>  i + ' ').join(',').trimEnd(',')}]</p>

         <p> Output Array of Strings : [{strArray.filter((item,index) => strArray.indexOf(item) === index).map(i =>  i + ' ').join(',').trimEnd(',')} ]</p>
      </div>
    </Fragment>
  );
};

