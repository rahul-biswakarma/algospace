import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";
import Main from "./components/Main/Main";
import "./App.css";
import "./assets/css/Theme.css";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="AppRight">
        <Main />
        <TopBar />
      </div>
    </div>
  );
}

export default App;
