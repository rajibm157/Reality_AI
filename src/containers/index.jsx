import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BusinessModal, CityModal, Loading, LocalityModal } from "_components";

export default function containers(Components) {
  return (props) => {
    const navigate = useNavigate();
    const [showLoader, setshowLoader] = useState(false);
    const [showCityModal, setshowCityModal] = useState(false);
    const [showLocalityModal, setshowLocalityModal] = useState(false);
    const [showBusinessModal, setshowBusinessModal] = useState(false);

    const spinner = useMemo(
      () => ({
        show: () => setshowLoader(true),
        hide: () => setshowLoader(false),
      }),
      []
    );

    const modals = useMemo(
      () => ({
        showCity: () => setshowCityModal(true),
        hideCity: () => setshowCityModal(false),
        showLocality: () => setshowLocalityModal(true),
        hideLocality: () => setshowLocalityModal(false),
        showBusiness: () => setshowBusinessModal(true),
        hideBusiness: () => setshowBusinessModal(false),
      }),
      []
    );

    return (
      <>
        <Loading show={showLoader} />
        <Components
          spinner={spinner}
          modals={modals}
          navigate={navigate}
          {...props}
        />
        <CityModal show={showCityModal} onClose={modals.hideCity} />
        <LocalityModal show={showLocalityModal} onClose={modals.hideLocality} />
        <BusinessModal show={showBusinessModal} onClose={modals.hideBusiness} />
      </>
    );
  };
}
