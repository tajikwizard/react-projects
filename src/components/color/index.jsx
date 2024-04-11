import { useState } from "react";

const RandomColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white"); // Initial background color

  const createHexColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setBackgroundColor(color);
  };

  const createRgbColor = () => {
    const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
    setBackgroundColor(color);
  };

  const createRandomColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setBackgroundColor(color);
  };

  return (
    <main className="bg-red-400" style={{ backgroundColor }}>
      <h3 className="text-center text-3xl text-white">{backgroundColor}</h3>
      <div className="flex flex-col justify-center items-center h-screen">
        <h3 className="text-5xl text-center mb-12">Random Color</h3>
        <div className="container flex justify-center gap-2">
          <button
            onClick={createHexColor}
            className="hover:bg-black p-3 shadow-lg bg-red-500 text-white"
          >
            Create HEX Color
          </button>
          <button
            onClick={createRgbColor}
            className="hover:bg-black p-3 shadow-lg bg-green-500 text-white rounded-lg"
          >
            Create RGB Color
          </button>
          <button
            onClick={createRandomColor}
            className="hover:bg-black p-3 shadow-lg bg-yellow-500 text-white rounded-xl"
          >
            Create Random Color
          </button>
        </div>
      </div>
    </main>
  );
};

export default RandomColor;
