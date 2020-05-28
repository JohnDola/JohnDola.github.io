import React from "react";
import AboutMe from '../../components/AboutMe/AboutMe';
import TitleBar from '../../components/TitleBar/TitleBar';
import classes from './WebSiteView.module.css';
import MySkills from "../../components/MySkills/MySkills";

const WebSiteView = (props) => {

  return (
    <div className={classes.WebSiteView}>
      <TitleBar />
      <AboutMe>
        </AboutMe>
        <MySkills></MySkills>
    </div>
  );
};

export default WebSiteView
