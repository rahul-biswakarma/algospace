import * as Colors from "/components/AlgoPage/Searching/SearchingUtils/colors.js";

export default function ArrayBar(props) {
  return (
    <div
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        backgroundColor: `${
          props.bgColor == undefined ? Colors.DEFAULT_BG_COLOR : props.bgColor
        }`,
        borderColor: `${
          props.borderColor == undefined
            ? Colors.DEFAULT_BORDER_COLOR
            : props.borderColor
        }`,
      }}
      id={props.id}
      className={`relative array-bar border-2 transition-all ease-linear`}
    >
      {props.currEle ? (
        <div
          style={{
            margin: "0 0 -2px -2px",
            width: `${props.width}px`,
            height: `${props.targetHeight}px`,
            backgroundColor: `${Colors.TARGET_BG_COLOR}`,
            borderColor: `${Colors.TARGET_BORDER_COLOR}`,
          }}
          id={props.id + "target"}
          className={`absolute array-bar border-2 opacity-50 bottom-0 left-0 transition-all ease-linear`}
        ></div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
