import { useContext } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { context } from "../Context";

function Main() {
  let AppContext = useContext(context);
  return (
    <>
      <Title text="Text Component" isDarkMode={AppContext.isDarkMode} />
      <Paragraph isDarkMode={AppContext.isDarkMode} />
      <Title text="Card Component" isDarkMode={AppContext.isDarkMode} />
      <Cards />
      <Title text="Banner Component" isDarkMode={AppContext.isDarkMode} />
      <Banner isDarkMode={AppContext.isDarkMode} />
    </>
  );
}

export default Main;
