import { useState } from "react";
import accordionItems from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (id) => {
    if (enableMultipleSelection) {
      // Toggle selection for multiple selection mode
      setMultiple((prevMultiple) =>
        prevMultiple.includes(id)
          ? prevMultiple.filter((itemId) => itemId !== id)
          : [...prevMultiple, id]
      );
    } else {
      // Toggle selection for single selection mode
      setSelected((prevSelected) => (prevSelected === id ? null : id));
    }
  };

  return (
    <div className="wrapper flex-col animate-jump-in flex items-center justify-center h-screen">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        className="p-3 bg-slate-300 rounded-lg "
      >
        {enableMultipleSelection
          ? "Disable Multiple Select"
          : "Enable Multiple Select"}
      </button>
      <div className="accordion w-96">
        {accordionItems.length ? (
          accordionItems.map((item, index) => (
            <div className="accordion-item p-3 shadow m-5" key={index}>
              <div
                onClick={() => handleClick(item.id)}
                className={`title flex justify-between m-5 cursor-pointer ${
                  multiple.includes(item.id) ? "bg-gray-200" : ""
                }`}
              >
                <h1 className="accordion-header text-2xl">{item.title}</h1>
                <div className="text-2xl">
                  {selected === item.id || multiple.includes(item.id)
                    ? "-"
                    : "+"}
                </div>
              </div>
              <div
                className={`accordion-body ${
                  selected === item.id ? "animate-fade-down" : ""
                }`}
              >
                {selected === item.id || multiple.includes(item.id) ? (
                  <div className="accordion-content">{item.content}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data...</div>
        )}
      </div>
    </div>
  );
}
