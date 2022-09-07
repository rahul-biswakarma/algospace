import * as Colors from "/components/AlgoPage/Sorting/SortingUtils/colors.js";
const ArrayBar = (props) => {
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
};

export default ArrayBar;
