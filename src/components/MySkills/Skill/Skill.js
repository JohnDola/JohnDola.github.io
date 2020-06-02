import React from "react";
import classes from './Skill.module.css';
const Skill = ({ name, percentage }) => {
  return (
    <div className={classes.Skill}>
      <h6>
        {name}
        <span>{percentage} %</span>
      </h6>
      <div className={classes.PercentageBar}>
        <span style={{width: percentage + '%'}}></span>
      </div>
    </div>
  );
};
export default Skill;
