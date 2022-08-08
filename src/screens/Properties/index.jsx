import { useEffect } from "react";
import { Link } from "react-router-dom";
import containers from "_containers";

function PropertiesScreen({ spinner }) {
  useEffect(() => {
    spinner.show();
    setTimeout(() => {
      spinner.hide();
    }, 2000);

    return () => {};
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
              <img src="assets/images/left-circle-arrow.svg" alt="" />
            </Link>
            <span className="btn btn-primary btn-lg rounded-pill d-flex align-items-center">
              Properties for Restaurants
            </span>
            <Link
              to="/"
              className="btn btn-light btn-lg border rounded-5 btn-square"
            >
              <img src="assets/images/toggle.svg" alt="" />
            </Link>
          </div>
        </div>
      </header>
      <section className="pb-3">
        <div className="container">
          <div className="mb-3 filter-bar">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#businessType"
              className="btn btn-light rounded-5 shadow"
            >
              Business Type{" "}
              <img src="assets/images/eva_arrow-ios-downward-fill.svg" alt="" />
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#city"
              className="btn btn-light rounded-5 shadow"
            >
              City{" "}
              <img src="assets/images/eva_arrow-ios-downward-fill.svg" alt="" />
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#DesiredLocation"
              className="btn btn-light rounded-5 shadow"
            >
              Desired Location{" "}
              <img src="assets/images/eva_arrow-ios-downward-fill.svg" alt="" />
            </button>
          </div>
          <div className="mb-3 rounded-6 shadow bg-white properties-list">
            <div className="row m-0">
              <div className="col-4 p-0">
                <div className="property-img relative">
                  <div className="bookbark">
                    <img src="assets/images/bookmark.svg" alt="" />
                  </div>
                  <div className="compare-btn">
                    <span className="btn btn-light rounded-5">Compare</span>
                  </div>
                  <img src="assets/images/img.jpg" alt="" />
                </div>
              </div>
              <div className="col-8 p-0">
                <div className="p-3 property-dtls">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success">8.2</span>
                    <h3>
                      <a href="details-page.html">
                        #2 Best Value for Business Perfect for your Business
                      </a>
                    </h3>
                  </div>
                  <address>
                    <p>
                      JPM Mall
                      <br />
                      Sector 12, Gurgoan
                    </p>
                    <p>Type: Mall</p>
                    <p>Carpet Area: 3000 ft2</p>
                    <p>Rent: ₹ 15,000/month (₹1500/sqft)</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="properties-carousel p-3">
              <h3>Factors that you should consider:</h3>
              <div className="owl-carousel owl-theme property-carousel">
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img src="assets/images/png/winner.png" alt="" />
                  <h4>Competition</h4>
                  <h5 className="text-success">HIGH</h5>
                  <p>4 restaurants/1000 people</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/ion_footsteps-outline.svg"
                    alt=""
                  />
                  <h4>Footfalls</h4>
                  <h5 className="text-warning">MEDIUM</h5>
                  <p>100 people/day (150m radius)</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/fluent_people-audience.svg"
                    alt=""
                  />
                  <h4>Population</h4>
                  <h5 className="text-danger">LOW</h5>
                  <p>1000 people (1km radius)</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/ic_outline-business-center.svg"
                    alt=""
                  />
                  <h4>Market Presence</h4>
                  <h5 className="text-success">HIGH</h5>
                  <p>10 Shops in JPM Mall</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img src="assets/images/png/wallet.svg" alt="" />
                  <h4>Income</h4>
                  <h5 className="text-danger">LOW</h5>
                  <p>₹40,000/person (1km radius)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 rounded-6 shadow bg-white properties-list">
            <div className="row m-0">
              <div className="col-4 p-0">
                <div className="property-img relative">
                  <div className="bookbark">
                    <img src="assets/images/bookmark.svg" alt="" />
                  </div>
                  <div className="compare-btn">
                    <span className="btn btn-light rounded-5">Compare</span>
                  </div>
                  <img src="assets/images/img.jpg" alt="" />
                </div>
              </div>
              <div className="col-8 p-0">
                <div className="p-3 property-dtls">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success">8.2</span>
                    <h3>
                      <a href="details-page.html">
                        #2 Best Value for Business Perfect for your Business
                      </a>
                    </h3>
                  </div>
                  <address>
                    <p>
                      JPM Mall
                      <br />
                      Sector 12, Gurgoan
                    </p>
                    <p>Type: Mall</p>
                    <p>Carpet Area: 3000 ft2</p>
                    <p>Rent: ₹ 15,000/month (₹1500/sqft)</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="properties-carousel p-3">
              <h3>Factors that you should consider:</h3>
              <div className="owl-carousel owl-theme property-carousel">
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img src="assets/images/png/winner.png" alt="" />
                  <h4>Competition</h4>
                  <h5 className="text-success">HIGH</h5>
                  <p>4 restaurants/1000 people</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/ion_footsteps-outline.svg"
                    alt=""
                  />
                  <h4>Footfalls</h4>
                  <h5 className="text-warning">MEDIUM</h5>
                  <p>100 people/day (150m radius)</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/fluent_people-audience.svg"
                    alt=""
                  />
                  <h4>Population</h4>
                  <h5 className="text-danger">LOW</h5>
                  <p>1000 people (1km radius)</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/ic_outline-business-center.svg"
                    alt=""
                  />
                  <h4>Market Presence</h4>
                  <h5 className="text-success">HIGH</h5>
                  <p>10 Shops in JPM Mall</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img src="assets/images/png/wallet.svg" alt="" />
                  <h4>Income</h4>
                  <h5 className="text-danger">LOW</h5>
                  <p>₹40,000/person (1km radius)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 rounded-6 shadow bg-white properties-list">
            <div className="row m-0">
              <div className="col-4 p-0">
                <div className="property-img relative">
                  <div className="bookbark">
                    <img src="assets/images/bookmark.svg" alt="" />
                  </div>
                  <div className="compare-btn">
                    <span className="btn btn-light rounded-5">Compare</span>
                  </div>
                  <img src="assets/images/img.jpg" alt="" />
                </div>
              </div>
              <div className="col-8 p-0">
                <div className="p-3 property-dtls">
                  <div className="d-flex align-items-start">
                    <span className="badge bg-success">8.2</span>
                    <h3>
                      <a href="details-page.html">
                        #2 Best Value for Business Perfect for your Business
                      </a>
                    </h3>
                  </div>
                  <address>
                    <p>
                      JPM Mall
                      <br />
                      Sector 12, Gurgoan
                    </p>
                    <p>Type: Mall</p>
                    <p>Carpet Area: 3000 ft2</p>
                    <p>Rent: ₹ 15,000/month (₹1500/sqft)</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="properties-carousel p-3">
              <h3>Factors that you should consider:</h3>
              <div className="owl-carousel owl-theme property-carousel">
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img src="assets/images/png/winner.png" alt="" />
                  <h4>Competition</h4>
                  <h5 className="text-success">HIGH</h5>
                  <p>4 restaurants/1000 people</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/ion_footsteps-outline.svg"
                    alt=""
                  />
                  <h4>Footfalls</h4>
                  <h5 className="text-warning">MEDIUM</h5>
                  <p>100 people/day (150m radius)</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/fluent_people-audience.svg"
                    alt=""
                  />
                  <h4>Population</h4>
                  <h5 className="text-danger">LOW</h5>
                  <p>1000 people (1km radius)</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img
                    src="assets/images/png/ic_outline-business-center.svg"
                    alt=""
                  />
                  <h4>Market Presence</h4>
                  <h5 className="text-success">HIGH</h5>
                  <p>10 Shops in JPM Mall</p>
                </div>
                <div className="item p-2 rounded-4 shadow bg-white text-center">
                  <img src="assets/images/png/wallet.svg" alt="" />
                  <h4>Income</h4>
                  <h5 className="text-danger">LOW</h5>
                  <p>₹40,000/person (1km radius)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default containers(PropertiesScreen);
