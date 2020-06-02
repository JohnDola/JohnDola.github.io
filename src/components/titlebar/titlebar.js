import React, { useEffect, useState } from 'react';
import logo from '../../asset/img/d-icon32.png';
import classes from './TitleBar.module.css';

const TitleBar = (props) => {
	const [ activeClasses, setActiveClasses ] = useState(classes.TitleBar);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			console.log(window.scrollY);
			const activeClassList = [ classes.TitleBar ];
			if (window.scrollY >= 100) {
				activeClassList.push(classes.sticky);
				activeClassList.push(classes.FadeIn);
			}
			setActiveClasses(activeClassList.join(' '));
		});
	}, []);

	const scrollTo = (elementId) => {
		const element = document.getElementById(elementId);
		if (!element) {
			return;
		}
		window.scroll({
			behavior: 'smooth',
			left: 0,
			top: element.offsetTop
		});
	};

	const titles = [
		{ name: 'About Me', hash: '#aboutme' },
		{ name: 'My Skills', hash: '#myskills' },
		{ name: 'Experience', hash: '#experience' },
		{ name: 'Portfolio', hash: '#portfolio' },
		{ name: 'Education', hash: '#education' },
		{ name: 'Contact', hash: '#contact' }
	];
	const titleEntries = titles.map(({name,hash}, index) => {
		return (
			<li>
				<a key={index} href={hash} onClick={() => scrollTo(hash)}>
					{name}
				</a>
			</li>
		);
	});
	console.log(titleEntries);

	return (
		<div className={activeClasses}>
			<img src={logo} alt="logo not found" />
			<ul>{titleEntries}</ul>
		</div>
	);
};

export default TitleBar;
