import React, { Fragment } from "react";
import './styles.css';

export const Delay = () => {  

  const delay=(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleDelay=(e) => {
    if (e.key === 'Enter') {
      if(!(e.target.value > 10 || e.target.value < 1)){
        delay(e.target.value*1000).then(() => alert('Promise returns after ' + e.target.value  + ' seconds'));
      } else {
        e.target.value = '';
        alert('Uh Oh !! Please select something between 1 - 10')
      }
    }
  }

  return (
    <Fragment>
      <div className="delay">  
          <p>Enter the delay in seconds : <input type={"text"} onKeyDown={handleDelay}></input></p>
      </div>
      <p className="note-delay">Input a number in seconds from 1-10 and press enter key.</p>
    </Fragment>
  );
};

