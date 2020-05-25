import React from 'react';
import classes from './scrollpage.module.css';
const ScrollPage = (props) => <section className={classes.ScrollPage}>{props.children}</section>;

export default ScrollPage;
