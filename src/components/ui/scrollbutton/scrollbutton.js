import React from 'react';
import classes from './ScrollButton.module.css';

const ScrollButton = (props) => {
    console.log(props.isTypeWriteActive)
    if(props.isTypeWriteActive){
        return null;
    }
    const clicked = () => {
        console.log('clicked')
    }
	return (
		<div onClick={clicked}>
			<div className={[ classes.Arrow, classes.ArrowFirst ].join(' ')} />
			<div className={[ classes.Arrow, classes.ArrowSecond ].join(' ')} />
		</div>
	);
};
export default ScrollButton;