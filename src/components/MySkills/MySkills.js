import React from 'react';
import SubTitle from '../ui/SubTitle/Subtitle';
import classes from './MySkills.module.css';
import Skill from './Skill/Skill';
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
		<div  id="#myskills"  className={classes.MySkills} >
      <SubTitle >My skills</SubTitle>
      <div  className={classes.SkillList}>
      {skillList.map((skill,index) => {
               return <Skill key={index} {...skill}></Skill> 
            })}
      </div>
			
		</div>
	);
};

export default MySkills;
