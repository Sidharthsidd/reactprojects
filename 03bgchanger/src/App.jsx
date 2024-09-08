import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // Function to change the background color
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="h-screen w-full" style={{ backgroundColor: color }}>-------------------------------------------------color updated to {color}--------------------------------------------------------------------------------------------------------------------
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => handleColorChange("red")} // Change background color to red
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => handleColorChange("blue")} // Add more buttons for different colors
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => handleColorChange("orange")} // Add more buttons for different colors
          >
            orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => handleColorChange("yellow")} // Add more buttons for different colors
          >
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => handleColorChange("green")} // Add more buttons for different colors
          >
            Green
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
