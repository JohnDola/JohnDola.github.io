import classes from './SubTitle.module.css';
import React from 'react'
const SubTitle = (props) => {

	return (
      <h2 className={classes.SubTitle}>{props.children}</h2>
	);
};

export default SubTitle;
