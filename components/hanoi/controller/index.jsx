import { useEffect } from "react";
import Styles from "./styles.module.css";
import StartButton from "./component/start";
import CountSlider from "./component/count";
import DelaySlider from "./component/delay";
import GenerateDiscButton from "./component/generate";
import TowerOfHanoi from "/utils/TowerOfHanoi/TowerOfHanoi";
import { GenerateDisc } from "/utils/TowerOfHanoi/TohUtils";

const TowerOfHanoiController = (props) => {
  useEffect(() => {
    try {
      GenerateDisc(props.discCount);
    } catch {}
  }, []);

  const startToh = () => {
    TowerOfHanoi(props.discCount, props.sortingDelay);
  };

  return (
    <div className={Styles.Container}>
      <GenerateDiscButton Styles={Styles} discCount={props.discCount} />
      <CountSlider
        Styles={Styles}
        discCount={props.discCount}
        setDiscCount={props.setDiscCount}
      />
      <DelaySlider
        Styles={Styles}
        sortingDelay={props.sortingDelay}
        setSortingDelay={props.setSortingDelay}
      />
      <StartButton Styles={Styles} startToh={startToh} />
    </div>
  );
};

export default TowerOfHanoiController;
