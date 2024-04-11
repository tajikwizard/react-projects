import { useState } from "react";
import Accordion from "./components/accordion";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Accordion */}
      <Accordion />
    </>
  );
}

export default App;
