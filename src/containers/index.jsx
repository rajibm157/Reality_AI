import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BusinessModal, CityModal, Loading, LocalityModal } from "_components";

export default function containers(Components) {
  return (props) => {
    const navigate = useNavigate();
    const [showLoader, setshowLoader] = useState(false);

    const spinner = useMemo(
      () => ({
        show: () => setshowLoader(true),
        hide: () => setshowLoader(false),
      }),
      []
    );

    return (
      <>
        <Loading show={showLoader} />
        <Components spinner={spinner} navigate={navigate} {...props} />
        <BusinessModal />
        <CityModal />
        <LocalityModal />
      </>
    );
  };
}
