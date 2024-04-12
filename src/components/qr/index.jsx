import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [value, setValue] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleClick = () => {
    setGenerated(true);
  };

  return (
    <div className="qr flex justify-center flex-col items-center h-screen">
      <h2 className="mb-10 text-2xl">QR Code Generator</h2>
      <div className="shadow p-5 mb-5">
        <input
          className="border p-2 mx-3"
          type="text"
          placeholder="Enter text to generate"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="border p-2 bg-blue-500 text-white font-bold rounded-lg"
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
      {generated && value && <QRCode value={value} />}
    </div>
  );
};

export default QrCode;
