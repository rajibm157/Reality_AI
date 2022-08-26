import { Fragment } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "_contexts";
import { images } from "_constants";

function HomeScreen() {
  const navigate = useNavigate();
  const {
    city,
    businessType,
    localities,
    showBusiness,
    showCity,
    showLocality,
  } = useContext();

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
                    onClick={showBusiness}
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    <img src={images.home} alt="home" />
                    {businessType ? businessType.title : "Business Type"}
                    <img src={images.down_arrow} alt="down_arrow" />
                  </button>
                </div>
                <div className="col-5 d-grid mb-2">
                  <button
                    type="button"
                    onClick={showCity}
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    <img src={images.map_location} alt="map_location" />
                    {city ? city.name : "City"}
                    <img src={images.down_arrow} alt="down_arrow" />
                  </button>
                </div>
                <div className="col-12 d-grid mb-2">
                  <button
                    type="button"
                    onClick={showLocality}
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    {localities.length > 0 ? (
                      <>
                        {localities.map((item, index) => (
                          <Fragment key={item._id}>
                            {item.name}
                            {index !== localities.length - 1 && ", "}
                          </Fragment>
                        ))}
                      </>
                    ) : (
                      "Your Desired Location"
                    )}
                    <img src={images.search} alt="search" />
                  </button>
                </div>
                <div className="col-12 d-grid mb-2 mb-3">
                  <label className="text-light mb-3">
                    Select a Price Range:
                  </label>
                  <div className="custom-slider">
                    <img src={images.ranger} alt="ranger" />
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
        <img src={images.illustration} alt="illustration" />
      </div>
    </>
  );
}

export default HomeScreen;
