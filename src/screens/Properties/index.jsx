import { memo } from "react";
import { Link } from "react-router-dom";
import Containers from "_containers";

function PropertiesScreen(props) {
  return (
    <>
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
                <img
                  src="assets/images/eva_arrow-ios-downward-fill.svg"
                  alt=""
                />
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#city"
                className="btn btn-light rounded-5 shadow"
              >
                City{" "}
                <img
                  src="assets/images/eva_arrow-ios-downward-fill.svg"
                  alt=""
                />
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#DesiredLocation"
                className="btn btn-light rounded-5 shadow"
              >
                Desired Location{" "}
                <img
                  src="assets/images/eva_arrow-ios-downward-fill.svg"
                  alt=""
                />
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
      <br />
      {/* Business Modal */}
      <div
        className="modal fade"
        id="businessType"
        tabIndex={-1}
        aria-labelledby="businessTypeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-end">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="businessTypeLabel">
                Business Type
              </h5>
              <button type="button" className="btn text-primary">
                Reset
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg btn-light search-input"
                  placeholder="Search City.."
                />
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="Restaurant"
                />
                <label className="form-check-label" htmlFor="Restaurant">
                  Restaurant
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="Cafe"
                />
                <label className="form-check-label" htmlFor="Cafe">
                  Cafe
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="DentalClinic"
                />
                <label className="form-check-label" htmlFor="DentalClinic">
                  Dental Clinic
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="Pharmacy"
                />
                <label className="form-check-label" htmlFor="Pharmacy">
                  Pharmacy
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="NutritionistClinic"
                />
                <label
                  className="form-check-label"
                  htmlFor="NutritionistClinic"
                >
                  Nutritionist Clinic
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="ArtGallery"
                />
                <label className="form-check-label" htmlFor="ArtGallery">
                  Art Gallery
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="TherapyCentre"
                />
                <label className="form-check-label" htmlFor="TherapyCentre">
                  Therapy Centre
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="CoachingCentre"
                />
                <label className="form-check-label" htmlFor="CoachingCentre">
                  Coaching Centre
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="Supermarket"
                />
                <label className="form-check-label" htmlFor="Supermarket">
                  Supermarket
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* City Modal */}
      <div
        className="modal fade"
        id="city"
        tabIndex={-1}
        aria-labelledby="cityLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-end">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cityLabel">
                City
              </h5>
              <button type="button" className="btn text-primary">
                Reset
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg btn-light search-input"
                  placeholder="Search City.."
                />
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="mumbai"
                />
                <label className="form-check-label" htmlFor="mumbai">
                  Mumbai
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="pune"
                />
                <label className="form-check-label" htmlFor="pune">
                  Pune
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="kanpur"
                />
                <label className="form-check-label" htmlFor="kanpur">
                  Kanpur
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="nagpur"
                />
                <label className="form-check-label" htmlFor="nagpur">
                  Nagpur
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="delhi"
                />
                <label className="form-check-label" htmlFor="delhi">
                  Delhi
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="haryana"
                />
                <label className="form-check-label" htmlFor="haryana">
                  Haryana
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="bangluru"
                />
                <label className="form-check-label" htmlFor="bangluru">
                  Bangluru
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="kolkata"
                />
                <label className="form-check-label" htmlFor="kolkata">
                  Kolkata
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="searCity"
                  id="chennai"
                />
                <label className="form-check-label" htmlFor="chennai">
                  Chennai
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desired Location Modal */}
      <div
        className="modal fade"
        id="DesiredLocation"
        tabIndex={-1}
        aria-labelledby="DesiredLocationLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-end">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="DesiredLocationLabel">
                Desired Location
              </h5>
              <button type="button" className="btn text-primary">
                Reset
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg btn-light search-input"
                  placeholder="Search City.."
                />
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Sector11"
                />
                <label className="form-check-label" htmlFor="Sector11">
                  Sector 11
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Sector32"
                />
                <label className="form-check-label" htmlFor="Sector32">
                  Sector 32
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Sector39"
                />
                <label className="form-check-label" htmlFor="Sector39">
                  Sector 39
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="RamNagar"
                />
                <label className="form-check-label" htmlFor="RamNagar">
                  Ram Nagar
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="MGRoad"
                />
                <label className="form-check-label" htmlFor="MGRoad">
                  MG Road
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ShankarLane"
                />
                <label className="form-check-label" htmlFor="ShankarLane">
                  Shankar Lane
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Sector12"
                />
                <label className="form-check-label" htmlFor="Sector12">
                  Sector 12
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Sector14"
                />
                <label className="form-check-label" htmlFor="Sector14">
                  Sector 14
                </label>
              </div>
              <div className="form-check md-radio mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Sector22"
                />
                <label className="form-check-label" htmlFor="Sector22">
                  Sector 22
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Containers(PropertiesScreen));
