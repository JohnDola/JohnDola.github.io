import React, { useEffect, useState } from 'react';
import logo from '../../asset/img/d-icon32.png';
import classes from './TitleBar.module.css';
import { sectionTitles, ESection } from '../../common/sectionTitles';

const TitleBar = (props) => {
	const [ isTransparentTitleBar, setisTransparentTitleBar ] = useState(false);
	const [ hasAnimate, setHasAnimate ] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setisTransparentTitleBar(window.scrollY >= 100);
		});
	}, []);

	const scrollTo = (elementId) => {
		if (elementId === ESection.aboutme) {
			window.scrollTo(0, 0);
			return;
		}
		const element = document.getElementById(elementId);
		if (!element) {
			return;
		}

		element.scrollIntoView();
	};

	const titleEntries = sectionTitles.map(({ name, hash }, index) => {
		return (
			<li>
				<a key={index} href={hash} onClick={() => scrollTo(hash)}>
					{name}
				</a>
			</li>
		);
	});
	const classList = [ classes.TitleBar, classes.Sticky, isTransparentTitleBar ? classes.FadeIn : null ].join(' ');
	const hamburgerCls = [ classes.HamburgerMenu, hasAnimate ? classes.Change : null ].join(' ');
	return (
		<div className={classes.TitleBar}>
			<div className={classes.TitleBar}>
				<img src={logo} alt="logo not found" />
				<ul>{titleEntries}</ul>
				<div
					className={hamburgerCls}
					onClick={() => {
						setHasAnimate(!hasAnimate);
					}}
				>
					<div className={classes.Bar1} />
					<div className={classes.Bar2} />
					<div className={classes.Bar3} />
				</div>
			</div>
			<div style={{ visibility: isTransparentTitleBar ? 'visible' : 'hidden' }} className={classList}>
				<ul>
					<img src={logo} alt="logo not found" />

					{titleEntries}
				</ul>
			</div>
		</div>
	);
};

export default TitleBar;
