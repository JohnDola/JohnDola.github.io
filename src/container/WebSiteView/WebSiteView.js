import React from "react";
import AboutMe from '../../components/AboutMe/AboutMe';
import MySkills from "../../components/MySkills/MySkills";
import TitleBar from '../../components/TitleBar/TitleBar';
import classes from './WebSiteView.module.css';
import Experience from "../../components/Experience/Experience";

const WebSiteView = (props) => {

  return (
    <div className={classes.WebSiteView}>
      <TitleBar />
      <AboutMe>
        </AboutMe>
        <MySkills></MySkills>
        <Experience></Experience>
    </div>
  );
};

export default WebSiteView
