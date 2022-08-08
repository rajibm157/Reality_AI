import { memo, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "_contexts";
import { api } from "_utils";

function CityModal() {
  const { updateCity } = useContext();
  const [cities, setCities] = useState([]);
  const [filterCities, setFilterCities] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api
        .getCities()
        .catch((error) => toast.error(error.message));
      setCities(data.cities);
      setFilterCities(data.cities);
    })();
  }, []);

  const filter = useCallback(
    (params) => {
      const filterArr = cities.filter((item) =>
        item.name.toLowerCase().includes(params.toLowerCase())
      );
      setFilterCities(filterArr);
    },
    [cities]
  );

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
              onClick={() => updateCity(null)}
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
                onChange={(e) => filter(e.target.value)}
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
                    onChange={() => updateCity(city)}
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

export default memo(CityModal);
