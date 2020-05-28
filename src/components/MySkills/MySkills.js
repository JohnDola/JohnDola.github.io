import React, {useEffect, useState} from 'react';
import classes from './MySkills.module.css';

const MySkills = (props) => {
    const skillList = [
        {name:'JavaScript', percentage: 100},
        {name:'TypeScript', percentage: 100},
        {name:'CSS', percentage: 90},
        {name:'React', percentage: 100},
        {name:'Angular', percentage: 80},
        {name:'C#', percentage: 90},
        {name:'Java', percentage: 70},
        {name:'nodeJs', percentage: 70},
        {name:'Clean Code', percentage: 99}
      ]	


	return (
		<div className={classes.MySkills} >
			{skillList.map((skill,index) => {
               return <p key={index}>{skill.name}: {skill.percentage} %</p> 
            })}
		</div>
	);
};

export default MySkills;
