import React from "react";
import "./style.css";
import Logo from "../../assets/Logo.svg";
import { Moon, User } from "react-feather";
import AlgoJson from "../../util/algorithms.json";

function changeTheme() {
  //Toggle class (LightUI, DarkUI) in body to change the theme
  if (document.body.classList.contains("LightUI")) {
    document.body.classList.remove("LightUI");
    document.body.classList.add("DarkUI");
  } else {
    document.body.classList.remove("DarkUI");
    document.body.classList.add("LightUI");
  }
}

const SideBar = () => {
  for (const key in AlgoJson) {
    console.log();
  }

  return (
    <div className="side-bar-c">
      <div className="project-info">
        {/* Project's Name, Logo */}
        <div className="project-brand">
          <div>
            <img src={Logo} alt="project logo" />
          </div>
          <div>
            <h1>
              Back
              <br />
              Space
            </h1>
            <div className="project-version">version 0.15</div>
          </div>
        </div>
        {/* Some Links Related to Project */}
        <div className="projects-extra no-select">
          {/* Github Link */}
          <a href="https://github.com/id39r/algo-visualizer" target="_blank">
            Github
          </a>

          {/* Toogle Theme Button -> function present in TopBar Component */}
          <button id="toogle-theme" onClick={changeTheme}>
            <Moon />
          </button>

          {/* About Author :) */}
          <button id="toogle-author-info">
            <User />
          </button>
        </div>

        {/* Tags to improve UI */}
        <hr className="sidebar-hr" />
        <div className="gradient-seperator"></div>
      </div>

      {/* List of all the algorithms, fetches from .json file */}
      <div className="algorithms"></div>
    </div>
  );
};

export default SideBar;
