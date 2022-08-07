import { memo } from "react";
import PropTypes from "prop-types";

function LocalityModal(props) {
  return (
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
              <input className="form-check-input" type="checkbox" id="MGRoad" />
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
  );
}

LocalityModal.propTypes = {
  onclose: PropTypes.func,
};

export default memo(LocalityModal);
