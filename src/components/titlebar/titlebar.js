import React, { useEffect, useState } from 'react';
import logo from '../../asset/img/d-icon32.png';
import classes from './TitleBar.module.css';

const TitleBar = (props) => {
	const [ isTransparentTitleBar, setisTransparentTitleBar ] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setisTransparentTitleBar(window.scrollY >= 100);
		});
	}, []);

	const scrollTo = (elementId) => {
		const element = document.getElementById(elementId);
		if (!element) {
			return;
		}
		element.scrollIntoView();
	};

	const titles = [
		{ name: 'About Me', hash: '#aboutme' },
		{ name: 'My Skills', hash: '#myskills' },
		{ name: 'Experience', hash: '#experience' },
		{ name: 'Portfolio', hash: '#portfolio' },
		{ name: 'Education', hash: '#education' },
		{ name: 'Contact', hash: '#contact' }
	];
	const titleEntries = titles.map(({ name, hash }, index) => {
		return (
			<li>
				<a key={index} href={hash} onClick={() => scrollTo(hash)}>
					{name}
				</a>
			</li>
		);
	});

	return (
		<div id="#titleBar" className={classes.TitleBar}>
			<div className={classes.TitleBar}>
				<img src={logo} alt="logo not found" />
				<ul>{titleEntries}</ul>
			</div>
			<div
				style={{ visibility: isTransparentTitleBar ? 'visible' : 'hidden' }}
				className={[ classes.TitleBar, classes.Sticky, isTransparentTitleBar ? classes.FadeIn : null ].join(
					' '
				)}
			>
				<img src={logo} alt="logo not found" />
				<ul>{titleEntries}</ul>
			</div>
		</div>
	);
};

export default TitleBar;
