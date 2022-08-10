import { toast } from "react-toastify";
import containers from "_containers";
import { useContext } from "_contexts";
import { images } from "_constants";

function HomeScreen({ navigate, modals }) {
  const { city, businessType } = useContext();

  const onNavigate = () => {
    if (!city && !businessType) {
      return toast.info("Please select a city and business type");
    }
    navigate("properties");
  };

  return (
    <>
      <main className="main">
        <section className="py-5">
          <div className="container">
            <h3 className="text-primary mb-4">
              Find the Perfect Place suited for your Business.
            </h3>
            <div className="p-3 rounded-5 shadow-4 bg-white">
              <div className="row gx-2">
                <div className="col-7 d-grid mb-2">
                  <button
                    type="button"
                    onClick={modals.showBusiness}
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    <img src={images.home} alt="" />
                    {businessType ? businessType.title : "Business Type"}
                    <img src={images.down_arrow} alt="" />
                  </button>
                </div>
                <div className="col-5 d-grid mb-2">
                  <button
                    type="button"
                    onClick={modals.showCity}
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    <img src={images.map_location} alt="" />
                    {city ? city.name : "City"}
                    <img src={images.down_arrow} alt="" />
                  </button>
                </div>
                <div className="col-12 d-grid mb-2">
                  <button
                    type="button"
                    onClick={modals.showLocality}
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    Your Desired Location <img src={images.search} alt="" />
                  </button>
                </div>
                <div className="col-12 d-grid mb-2 mb-3">
                  <label className="text-light mb-3">
                    Select a Price Range:
                  </label>
                  <div className="custom-slider">
                    <img src={images.ranger} alt="" />
                  </div>
                </div>
              </div>
              <p className="lead text-light">
                <strong>563</strong> Results Found
              </p>
              <div className="d-grid gap-2 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary btn-lg rounded-5 shadow"
                  onClick={onNavigate}
                >
                  Search Property
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="Illustration-img">
        <img src={images.illustration} alt="" />
      </div>
    </>
  );
}

export default containers(HomeScreen);
