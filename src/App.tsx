import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./";
import "./App.css";
import Index from "./component/index";
import { RootContext, rootContext } from "./context/root.context";
import { HashRouter as Router } from "react-router-dom";

function App() {
  const rootContextData: RootContext = {
    appName: "ardhangini-admin-app",
  };

  return (
    <rootContext.Provider value={rootContextData}>
      <Router>
        <Index></Index>
      </Router>
    </rootContext.Provider>
  );
}

export default App;
