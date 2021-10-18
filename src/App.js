import React, { Component } from "react";
import PrincipalMenu from "../src/frontend/pages/Principal-Menu/index";
import KidProvider from "./frontend/context/kidContext";
class App extends Component {
  render() {
    return (
      <KidProvider>
        <PrincipalMenu />
      </KidProvider>
    );
  }
}

export default App;