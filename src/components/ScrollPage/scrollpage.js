import React from 'react';
import classes from './ScrollPage.module.css';
const ScrollPage = (props) => <section className={classes.ScrollPage}>{props.children}</section>;

export default ScrollPage;
