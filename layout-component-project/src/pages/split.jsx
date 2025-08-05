import React from "react";
import { SplitScreen } from "../componets/split-screen";

const LeftSideComponent = () => {
  return <h2 style={{ background: "crimson" }}>I am Left</h2>;
};
const RightSideComponent = () => {
  return <h2 style={{ background: "orange" }}>I am Right</h2>;
};
const Split = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent />
      <RightSideComponent />
    </SplitScreen>
  );
};

export default Split;
