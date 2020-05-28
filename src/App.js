import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./App.css";
import WebSiteView from "./container/WebSiteView/WebSiteView";
library.add(fab);
function App() {
  return (
    <div className="App">
      <WebSiteView></WebSiteView>
    </div>
  );
}

export default App;
