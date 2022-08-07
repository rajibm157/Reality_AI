import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { api } from "_services";

function CityModal(props) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.getCities();
      setCities(data.cities);
    })();
    return () => {};
  }, []);

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
            {cities &&
              cities.map((city) => (
                <div className="form-check md-radio mb-2" key={city.name}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="city"
                    id={city._id}
                  />
                  <label className="form-check-label" htmlFor={city._id}>
                    {city.name}
                  </label>
                </div>
              ))}
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
