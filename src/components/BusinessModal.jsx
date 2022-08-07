import { memo } from "react";
import PropTypes from "prop-types";

function BusinessModal(props) {
  return (
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
              <label className="form-check-label" htmlFor="NutritionistClinic">
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
  );
}

BusinessModal.propTypes = {
  onclose: PropTypes.func,
};

export default memo(BusinessModal);
