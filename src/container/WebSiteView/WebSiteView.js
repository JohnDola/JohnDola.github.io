import React from "react";
import ScrollPage from '../../components/ScrollPage/ScrollPage';
import TitleBar from '../../components/TitleBar/TitleBar';
import classes from './WebSiteView.module.css';

const WebSiteView = (props) => {
  console.log(classes)
  return (
    <div className={classes.WebSiteView}>
      <TitleBar />
      <ScrollPage>
      </ScrollPage>
    </div>
  );
};

export default WebSiteView
