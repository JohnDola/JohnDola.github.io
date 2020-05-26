import React, { useState } from "react";
import ScrollPage from '../../components/ScrollPage/ScrollPage';
import TitleBar from '../../components/TitleBar/TitleBar';
import TypeWriter from '../../components/TypeWriter/TypeWriter';
import ScrollButton from '../../components/ui/ScrollButton/ScrollButton';
const WebSiteView = (props) => {

    const [disableScrollButton, setDisableScrollButton] = useState(true)
    const setIsReady = () => {
        setDisableScrollButton(false);
    }
    
  return (
    <React.Fragment>
      <TitleBar />
      <ScrollPage>
        <TypeWriter invokeSetIsReady={setIsReady} />
        <ScrollButton isTypeWriteActive={disableScrollButton}></ScrollButton>
      </ScrollPage>
      <ScrollPage>2</ScrollPage>
      <ScrollPage>3</ScrollPage>
    </React.Fragment>
  );
};

export default WebSiteView
