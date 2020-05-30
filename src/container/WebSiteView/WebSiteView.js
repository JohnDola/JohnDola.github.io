import React from "react";
import AboutMe from '../../components/AboutMe/AboutMe';
import MySkills from "../../components/MySkills/MySkills";
import TitleBar from '../../components/TitleBar/TitleBar';
import classes from './WebSiteView.module.css';

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
