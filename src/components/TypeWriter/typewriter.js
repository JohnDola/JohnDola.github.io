import React, { useRef, useEffect } from 'react';
import classes from './typewriter.module.css';
const TypeWriter = (props) => {
	const typeWriter = useRef(null);
	useEffect(() => {
		const typeWriter2 = setupTypewriter(typeWriter.current);

		typeWriter2.type();
	});
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
					tempTypeSpeed = Math.random() * typeSpeed + 50;
				}
				t.innerHTML += HTML[cursorPosition];
			}
			if (writingTag === true && HTML[cursorPosition] === '>') {
				tempTypeSpeed = Math.random() * typeSpeed + 50;
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
			}
		};

		return {
			type: type
		};
	};
	

	return (
		<div>
			<pre ref={typeWriter} className={classes.TypeWriter}>
				{
				`<span className={classes.ConstHighlight}>var</span> object = {'{'} 
				name: <span className={classes.StringHighlight}>'John Marco Dola'</span>`}
				{/* type:  <span className={classes.StringHighlight}>'Full Stack Software Developer'</span>,
				 location: <span className={classes.StringHighlight}>'Germany'</span>, 
				 properties:[<span className={classes.StringHighlight}>'Javascript'</span>,
				<span className={classes.StringHighlight}>'HTML'</span>,
				<span className={classes.StringHighlight}>'CSS'</span>] {'}'} ; */}
				
			</pre>
		</div>
	);
};

export default TypeWriter;
