import React, { useEffect, useRef } from 'react';
import classes from './TypeWriter.module.css';
const TypeWriter = (props) => {
	const typeWriter = useRef(null);

	useEffect(() => {
		const typeWriter2 = setupTypewriter(typeWriter.current);
		typeWriter2.type();
	}, []);
	const setupTypewriter = (t) => {
		var HTML = t.innerHTML;

		t.innerHTML = '';

		let cursorPosition = 0,
			tag = '',
			writingTag = false,
			tagOpen = false,
			typeSpeed = 100,
			tempTypeSpeed = 0;

		const type = () => {
			if (writingTag === true) {
				tag += HTML[cursorPosition];
			}
			if (HTML[cursorPosition] === '<') {
				tempTypeSpeed = 0;
				if (tagOpen) {
					tagOpen = false;
					writingTag = true;
				} else {
					tag = '';
					tagOpen = true;
					writingTag = true;
					tag += HTML[cursorPosition];
				}
			}

			if (!writingTag && tagOpen) {
				if (!!tag) {
					tag.innerHTML += HTML[cursorPosition];
				} else {
					tagOpen = false;
				}
			}
			if (!writingTag && !tagOpen) {
				if (HTML[cursorPosition] === ' ') {
					tempTypeSpeed = 0;
				} else {
					tempTypeSpeed = Math.random() * typeSpeed + 30;
				}
				t.innerHTML += HTML[cursorPosition];
			}
			if (writingTag === true && HTML[cursorPosition] === '>') {
				tempTypeSpeed = Math.random() * typeSpeed + 30;
				writingTag = false;
				if (tagOpen) {
					var newSpan = document.createElement('span');
					t.appendChild(newSpan);
					newSpan.innerHTML = tag;
					tag = newSpan.firstChild;
				}
			}

			cursorPosition += 1;
			if (cursorPosition < HTML.length - 1) {
				setTimeout(type, tempTypeSpeed);
			} else {
				props.invokeSetIsReady();
			}
		};

		return {
			type: type
		};
	};

	let sixTabs = <span style={{ paddingLeft: '6em' }} />;
	let nineTabs = <span style={{ paddingLeft: '9em' }} />;

	return (
		<div className={classes.TypeWriter}>
			<pre ref={typeWriter} className={classes.TypeWriterBody}>
				<span className={classes.ConstHighlight}>const</span> object = {'{\n'}
				{sixTabs}name: <span className={classes.StringHighlight}>'John Marco Dola'</span>, {'\n'}
				{sixTabs}type: <span className={classes.StringHighlight}>'Full Stack Software Developer'</span>,{' '}
				{'\n'}
				{sixTabs}location: <span className={classes.StringHighlight}>'Germany'</span>, {'\n'}
				{sixTabs}skills:[ {'\n'}
				{nineTabs}
				<span className={classes.StringHighlight}>'Javascript/TypeScript'</span>,
				{'\n'}
				{nineTabs}
				<span className={classes.StringHighlight}>'React or Angular'</span>,
				{'\n'}
				{nineTabs}
				<span className={classes.StringHighlight}>'C#, Java or even nodeJS'</span>
				{'\n'}
				{nineTabs}
				<span className={classes.StringHighlight}>'Clean Code'</span>
				{'\n'}
				{nineTabs}] {'\n};;'}

			</pre>
		</div>
	);
};

export default TypeWriter;
