const ArrayBar = (props) => {
  return (
    <div
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
      className={"array-bar border-green border-2 bg-green-bg"}
    ></div>
  );
};

export default ArrayBar;
