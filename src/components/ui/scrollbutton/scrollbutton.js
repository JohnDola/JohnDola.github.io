import React from 'react';
import classes from './scrollbutton.module.css';

const ScrollButton = (props) => {
    console.log(props.isTypeWriteActive)
    if(props.isTypeWriteActive){
        return null;
    }
	return (
		<div >
			<div className={[ classes.Arrow, classes.ArrowFirst ].join(' ')} />
			<div className={[ classes.Arrow, classes.ArrowSecond ].join(' ')} />
		</div>
	);
};
export default ScrollButton;