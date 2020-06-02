import React, { useState } from "react";
import classes from './Skill.module.css';
const Skill = ({ name, percentage }) => {
  let [delayedPercentage ,setDelayedPercentage]= useState(0);
  setTimeout(()=>{
    setDelayedPercentage( percentage)
  },300)

  return (
    
    <div className={classes.Skill}>
      <h6>
        {name}
        <span>{percentage} %</span>
      </h6>
      <div className={classes.PercentageBar}>
        <span style={{width: delayedPercentage + '%'}}></span>
      </div>
    </div>
  );
};
export default Skill;
