import React from 'react';
import classes from './ExperienceTrack.module.css';
const ExperienceTrack = ({ title, responsibilities, description, location, experiences }) => (
	<div className={classes.ExperienceTrack}>
		<aside>
			<h4>{title}</h4>
			<big>{location}</big>
		</aside>
		<div className={classes.Listing}>
			<p>{description}</p>
			<ul>{responsibilities.map((entry, index) => <li key={index}>{entry}</li>)}</ul>
			<ul>{experiences.map((entry, index) => <li key={index}>{entry}</li>)}</ul>
		</div>
	</div>
);

export default ExperienceTrack;
