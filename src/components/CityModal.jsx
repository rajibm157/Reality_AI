/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { api } from "_services";

function CityModal({ onSelect }) {
  const [cities, setCities] = useState([]);
  const [filterCities, setFilterCities] = useState([]);
  const [search, setSearch] = useState("");

  const getCities = useCallback(() => {
    api
      .getCities()
      .then(({ data }) => {
        setCities(data.cities);
        setFilterCities(data.cities);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  useEffect(() => getCities(), []);

  useEffect(() => {
    const filter = cities.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterCities(filter);
  }, [search]);

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
            <button
              type="button"
              className="btn text-primary"
              onClick={() => onSelect(null)}
            >
              Reset
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg btn-light search-input"
                placeholder="Search City.."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
            {filterCities &&
              filterCities.map((city) => (
                <div className="form-check md-radio mb-2" key={city.name}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="city"
                    id={city._id}
                    onChange={() => onSelect(city)}
                    value={city._id}
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
  onSelect: PropTypes.func,
};

export default memo(CityModal);
