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
      className={`array-bar border-2`}
    ></div>
  );
}
