import { useMemo } from "react";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { BusinessModal, CityModal, LocalityModal } from "_components";

export default function containers(Components) {
  return (props) => {
    const [showLoader, setshowLoader] = useState(true);
    const [city, setCity] = useState(null);

    const spinner = useMemo(
      () => ({
        show: () => setshowLoader(false),
        hide: () => setshowLoader(true),
      }),
      []
    );

    return (
      <>
        <div
          hidden={showLoader}
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
        <Components spinner={spinner} {...props} city={city} />
        <BusinessModal />
        <CityModal onSelect={(e) => setCity(e)} />
        <LocalityModal />
      </>
    );
  };
}
