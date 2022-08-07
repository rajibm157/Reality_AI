function HomeScreen() {
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
                    data-bs-toggle="modal"
                    data-bs-target="#businessType"
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    <img src="assets/images/home.svg" alt="" /> Business Type{" "}
                    <img src="assets/images/down-arrow.svg" alt="" />
                  </button>
                </div>
                <div className="col-5 d-grid mb-2">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#city"
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    <img src="assets/images/map-location.svg" alt="" />
                    City <img src="assets/images/down-arrow.svg" alt="" />
                  </button>
                </div>
                <div className="col-12 d-grid mb-2">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#DesiredLocation"
                    className="btn btn-light btn-lg rounded-pill d-flex justify-content-between align-items-center"
                  >
                    Your Desired Location{" "}
                    <img src="assets/images/icons8_search.svg" alt="" />
                  </button>
                </div>
                <div className="col-12 d-grid mb-2 mb-3">
                  <label className="text-light mb-3">
                    Select a Price Range:
                  </label>
                  <div className="custom-slider">
                    <img src="assets/images/ranger.svg" alt="" />
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
                >
                  Search Locality
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-lg rounded-5 shadow"
                >
                  Search Property
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="Illustration-img">
        <img src="assets/images/Illustration.svg" alt="" />
      </div>
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

export default HomeScreen;
