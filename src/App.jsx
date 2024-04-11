import { useState } from "react";
import Accordion from "./components/accordion";
import "./index.css";
import RandomColor from "./components/color";

function App() {
  return (
    <>
      {/* Accordion */}
      <Accordion />
      {/* Random Color */}
      <RandomColor />
    </>
  );
}

export default App;
