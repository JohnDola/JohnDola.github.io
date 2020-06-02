import React, { useState, useEffect } from 'react';
import classes from './Skill.module.css';
import { ESection } from '../../../common/sectionTitles';
const Skill = ({ name, percentage }) => {
	let [ delayedPercentage, setDelayedPercentage ] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (document.documentElement.scrollTop > 100) {
				setDelayedPercentage(percentage);
			} else {
				setDelayedPercentage(0);
			}
		});
	}, []);
	return (
		<div className={classes.Skill}>
			<h6>
				{name}
				<span>{percentage} %</span>
			</h6>
			<div className={classes.PercentageBar}>
				<span style={{ width: delayedPercentage + '%' }} />
			</div>
		</div>
	);
};
export default Skill;
