import React from "react";

const LightBulb = props =>
  props.isLit ? <div>its on</div> : <div>its off</div>;

export default LightBulb;
