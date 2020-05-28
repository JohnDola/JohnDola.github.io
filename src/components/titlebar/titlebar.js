import React, {useEffect, useState} from 'react';
import logo from '../../asset/img/d-icon32.png';
import classes from './TitleBar.module.css';

const TitleBar = (props) => {
const [activeClasses, setActiveClasses] = useState(classes.TitleBar);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			console.log(window.scrollY);
			const activeClassList = [classes.TitleBar];
			if(window.scrollY >= 100){
				activeClassList.push(classes.sticky);
				activeClassList.push(classes.FadeIn);
			}
			setActiveClasses(activeClassList.join(' '))
		 });
	},[]);


	return (
		<div className={activeClasses}>
			<img src={logo} alt="logo not found"></img>
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#education">Education</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</div>
	);
};

export default TitleBar;
