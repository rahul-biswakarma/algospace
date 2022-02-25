import React from "react";
import Logo from "../../Assets/Logo.svg";
import SelectSearch from "react-select-search";
import { Moon, Settings, GitHub } from "react-feather";
import "./TopBar.css";

const TopBar = () => {
  let options = [
    {
      type: "group",
      name: "Sorting",
      items: [
        { name: "Bubble Sort", value: "bubblesort" },
        { name: "Selection Sort", value: "selectionsort" },
        { name: "Merge Sort", value: "mergesort" },
        { name: "Quick Sort", value: "quicksort" },
        { name: "Heap Sort", value: "heapsort" },
      ],
    },
    {
      type: "group",
      name: "Searching",
      items: [
        { name: "Linear Search", value: "linearsearch" },
        { name: "Binary Search", value: "binarysearch" },
        { name: "Jump Search", value: "jumpsearch" },
        { name: "Fibonacci Search", value: "fibonaccisearch" },
        { name: "Interpolation Search", value: "interpolationsearch" },
      ],
    },
    {
      type: "group",
      name: "Graph Search Algorithm",
      items: [
        { name: "Breath First Search", value: "bfs" },
        { name: "Depth First Search", value: "dfs" },
      ],
    },
  ];

  return (
    <header className="nav-c">
      <div className="header-brand-c">
        <img src={Logo} alt="App Logo" />
        <h1>BackSpace</h1>
      </div>
      <div className="header-search">
        <SelectSearch
          search={true}
          placeholder="Select Algorithm"
          options={options}
          className="selectsearch-algo"
        />
      </div>
      <div className="header-options">
        <Moon />
        <Settings />
        <GitHub />
      </div>
    </header>
  );
};

export default TopBar;
