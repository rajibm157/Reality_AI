import { memo } from "react";
import { InfinitySpin } from "react-loader-spinner";

function Loading({ show = false }) {
  return (
    <div
      hidden={!show}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(10, 10, 10, 0.95)",
      }}
    >
      <InfinitySpin width="200" color="#0c94af" />
    </div>
  );
}

export default memo(Loading);
