import React from "react";

type ContainerProps = {
  styles: React.CSSProperties;
};
const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      <p>This is text </p>
    </div>
  );
};

export default Container;
