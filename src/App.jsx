import { useState } from "react";
import Accordion from "./components/accordion";
import "./index.css";
import RandomColor from "./components/color";
import StarRating from "./components/star";
import LoadMoreData from "./components/load";
import QrCode from "./components/qr";
import Theme from "./components/theme";
import Scroll from "./components/scroll";

function App() {
  return (
    <div className="mt-10">
      {/* Scroll */}
      <Scroll />
      {/* Accordion */}
      <Accordion />
      {/* Random Color */}
      <RandomColor />
      {/* Star Rating */}
      <StarRating numberOfStars={5} />
      {/* Load Data */}
      <LoadMoreData />
      {/* QR Code */}
      <QrCode />
      {/* Theme */}
      <Theme />
    </div>
  );
}

export default App;
