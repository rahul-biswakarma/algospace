import { useEffect } from "react";
import Styles from "./styles.module.css";
import StartButton from "./component/start";
import CountSlider from "./component/count";
import DelaySlider from "./component/delay";
import EnableButton from "/utils/EnableButtons";
import DisableButton from "/utils/DisableButtons";
import GenerateDiscButton from "./component/generate";
import TowerOfHanoi from "/utils/TowerOfHanoi/TowerOfHanoi";
import { GenerateDisc } from "/utils/TowerOfHanoi/TohUtils";

const TowerOfHanoiController = (props) => {
  useEffect(() => {
    try {
      GenerateDisc(props.discCount);
    } catch {}
  }, []);

  const startToh = async () => {
    DisableButton(["hanoi-generate", "hanoi-delay", "hanoi-count"]);
    await TowerOfHanoi(props.discCount, props.sortingDelay);
    EnableButton(["hanoi-generate", "hanoi-delay", "hanoi-count"]);
  };

  return (
    <div className={Styles.Container}>
      <GenerateDiscButton
        id="hanoi-generate"
        Styles={Styles}
        discCount={props.discCount}
      />
      <CountSlider
        id="hanoi-count"
        Styles={Styles}
        discCount={props.discCount}
        setDiscCount={props.setDiscCount}
      />
      <DelaySlider
        id="hanoi-delay"
        Styles={Styles}
        sortingDelay={props.sortingDelay}
        setSortingDelay={props.setSortingDelay}
      />
      <StartButton id="hanoi-start" Styles={Styles} startToh={startToh} />
    </div>
  );
};

export default TowerOfHanoiController;
