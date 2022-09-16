import React, { Fragment } from "react";
import disney from './disney.png';
import './styles.css';

export const Animate = () => {  
  return (
    <Fragment>
      <div className="animate" >  
        <img src={disney} alt="disneyImage"  width="175" height="100"/>
      </div>
      <p className="note-animate"> Hover on the image to move it right to 100 px with a delay of 100 ms</p>
    </Fragment>
  );
};

