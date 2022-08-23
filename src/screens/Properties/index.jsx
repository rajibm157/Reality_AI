import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Property } from "_components";
import containers from "_containers";
import { useContext } from "_contexts";
import { images } from "_constants";
import { importScript } from "_utils";

function PropertiesScreen({ spinner, modals }) {
  const { city, businessType, localities } = useContext();

  useEffect(() => {
    spinner.show();
    setTimeout(() => {
      spinner.hide();
      importScript("owl.carousel");
      importScript("custom");
    }, 2000);

    return () => {
      importScript("owl.carousel", false);
      importScript("custom", false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="main">
      <header className="header py-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <Link
              to="/"
              className="btn btn-light btn-lg border rounded-5 btn-square"
            >
              <img src={images.circle_arrow} alt="arrow" />
            </Link>
            <span className="btn btn-primary btn-lg rounded-pill d-flex align-items-center">
              Properties for Restaurants
            </span>
            <Link
              to="/"
              className="btn btn-light btn-lg border rounded-5 btn-square"
            >
              <img src={images.toggle} alt="toggle" />
            </Link>
          </div>
        </div>
      </header>
      <section className="pb-3">
        <div className="container">
          <div className="mb-3 filter-bar">
            <button
              type="button"
              onClick={modals.showBusiness}
              className="btn btn-light rounded-5 shadow"
            >
              {businessType ? businessType.title : "Business Type"}{" "}
              <img src={images.eva_arrow} alt="eva_arrow" />
            </button>
            <button
              type="button"
              onClick={modals.showCity}
              className="btn btn-light rounded-5 shadow mx-1"
            >
              {city ? city.name : "City"}{" "}
              <img src={images.eva_arrow} alt="eva_arrow" />
            </button>
            <button
              type="button"
              onClick={modals.showLocality}
              className="btn btn-light rounded-5 shadow"
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
                "Desired Location"
              )}{" "}
              <img src={images.eva_arrow} alt="eva_arrow" />
            </button>
          </div>
          <Property />
          <Property />
          <Property />
          <Property />
        </div>
      </section>
    </main>
  );
}

export default containers(PropertiesScreen);
