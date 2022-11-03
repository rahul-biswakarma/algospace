import { setTarget } from "/redux/reducers/searchingSlice";
import { useSelector, useDispatch } from "react-redux";

export default function TargetContainer() {
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 left-0 flex flex-row font-space text-text-1 px-[1.3rem] py-[0.5rem] gap-[0.5rem] items-center bg-green-bg ">
      Target{" "}
      <input
        className="input-feild border-2 border-green-bg-4 p-1"
        placeholder={useSelector((state) => state.searching.target)}
        value={useSelector((state) => state.searching.target)}
        onChange={(e) => {
          dispatch(setTarget(e.target.value));
        }}
      />
    </div>
  );
}
