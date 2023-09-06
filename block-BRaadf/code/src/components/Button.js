import React, { useContext } from "react";
import { context } from "../Context";

export default function SwitchButton() {
  let { isDarkMode, changeMode } = useContext(context);
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
