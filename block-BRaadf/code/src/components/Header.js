import { useContext } from "react";
import { context } from "../Context";

function Header() {
  let Appcontext = useContext(context);
  return (
    <h1
      className={`heading ${
        Appcontext.isDarkMode ? "heading-dark" : "heading-light"
      }`}
    >
      {Appcontext.isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
