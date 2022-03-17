import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const AlgoCodeVisualizer = (props) => {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={props.algoCode}
      language="js"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          id="algoCodeVisualzierId"
          className={`${props.Styles.CodePreTag} hideOptionDivs`}
        >
          {tokens.map((line, i) => (
            <div key="codeDiv" {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key="codeSpan" {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default AlgoCodeVisualizer;
