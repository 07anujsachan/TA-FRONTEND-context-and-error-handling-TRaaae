import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { context } from "../Context";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <context.Provider value={{ isDarkMode, changeMode: this.changeMode }}>
        <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
          <Header />
          <Main />
          <SwitchButton />
        </div>
      </context.Provider>
    );
  }
}

export default App;
