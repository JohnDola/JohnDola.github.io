import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../asset/img/d-icon32.png';
import classes from './TitleBar.module.css';

const TitleBar = (props) => {
	return (
		<div className={classes.TitleBar}>
			<ul>
				<li>About</li>
				<li>Skills</li>
				<li>Experience</li>
				<li>Portfolio</li>
				<li>Education</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default TitleBar;
