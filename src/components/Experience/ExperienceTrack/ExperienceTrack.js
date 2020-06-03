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
			<div className={classes.Dots}>
				<span />
				<span />
				<span />
			</div>
			<ul aria-label="Responsibilities">
				{responsibilities.map((entry, index) => <li key={index}>{entry}</li>)}
			</ul>
			<ul aria-label="Experiences">{experiences.map((entry, index) => <li key={index}>{entry}</li>)}</ul>
		</div>
	</div>
);

export default ExperienceTrack;
