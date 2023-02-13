//github.com/venushadilshan/react-spinner-animated?ref=reactjsexample.com

import React from "react";
import { DoubleBubble, SlidingPebbles } from "react-spinner-animated";
// import "react-spinner-animated/dist/index.css";

function Loader() {
  return (
    <>
      <DoubleBubble text="Searching..." width={"100px"} height={"200px"} />
    </>
  );
}

export default Loader;
