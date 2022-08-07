import { memo } from "react";
import PropTypes from "prop-types";

function CityModal(props) {
  return (
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
  );
}

CityModal.propTypes = {
  onclose: PropTypes.func,
};

export default memo(CityModal);
