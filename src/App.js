import React, { useState } from "react";
import TopBar from "./Components/TopBar/TopBar";
import SearchingBase from "./Components/SearchingComponent/SearchingBase";
import "./App.css";
import "./Assets/css/Theme.css";

function App() {
  const [algo, setAlgo] = useState("bubblesort");
  const [array, setArray] = useState([]);

  return (
    <div className="App">
      <TopBar />
      <div className="main-c">
        <SearchingBase algoState={algo} array={array} setArray={setArray} />
      </div>
    </div>
  );
}

export default App;
