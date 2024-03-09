import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const initialCounter = 0;

  const handlePlusClick = () => {
    setCounter(counter + 1);
  };

  const handleMinusClick = () => {
    setCounter(counter - 1);
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setCounter(value);
    }
  };

  const handleReset = () => {
    setCounter(initialCounter);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Your habit name
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      >
        {counter} / your goal
      </div>
      {/* buttons */}
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleMinusClick}
        >
          -
        </button>

        <input
          type="number"
          value={counter}
          onChange={handleInputChange}
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            width: "100px",
            textAlign: "center",
          }}
        />

        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handlePlusClick}
        >
          +
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "gray",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
