import { useState } from "react";
import Accordion from "./components/accordion";
import "./index.css";
import RandomColor from "./components/color";
import StarRating from "./components/star";
import LoadMoreData from "./components/load";
import QrCode from "./components/qr";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
