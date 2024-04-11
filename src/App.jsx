import { useState } from "react";
import Accordion from "./components/accordion";
import "./index.css";
import RandomColor from "./components/color";
import StarRating from "./components/star";

function App() {
  return (
    <>
      {/* Accordion */}
      <Accordion />
      {/* Random Color */}
      <RandomColor />
      {/* Star Rating */}
      <StarRating numberOfStars={5} />
    </>
  );
}

export default App;
