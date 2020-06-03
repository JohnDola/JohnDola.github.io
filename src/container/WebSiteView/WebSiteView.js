import React from "react";
import AboutMe from '../../components/AboutMe/AboutMe';
import MySkills from "../../components/MySkills/MySkills";
import TitleBar from '../../components/TitleBar/TitleBar';
import classes from './WebSiteView.module.css';
import Experience from "../../components/Experience/Experience";
import Contact from "../../components/Contact/Contact";

const WebSiteView = (props) => {

  return (
    <div className={classes.WebSiteView}>
      <TitleBar />
      <AboutMe>
        </AboutMe>
        <MySkills></MySkills>
        <Experience></Experience>
        <Contact></Contact>
    </div>
  );
};

export default WebSiteView
