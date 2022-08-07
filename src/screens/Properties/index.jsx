import React, { memo } from "react";
import Containers from "_containers";

function PropertiesScreen(props) {
  console.log(props);
  return <div>Properties Screen</div>;
}

export default memo(Containers(PropertiesScreen));
