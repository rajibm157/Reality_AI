import { memo, useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useContext } from "_contexts";
import { api } from "_utils";

function CityModal({ show, onClose }) {
  const { city, updateCity } = useContext();
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
    <Modal
      show={show}
      className="all-modal"
      onHide={() => onClose()}
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title>City</Modal.Title>
        <button
          type="button"
          className="btn text-primary"
          onClick={() => updateCity(null)}
        >
          Reset
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg btn-light search-input"
            placeholder="Search City.."
            onChange={(e) => filter(e.target.value)}
          />
        </div>
        {filterCities &&
          filterCities.map((item) => (
            <div className="form-check md-radio mb-2" key={item._id}>
              <input
                className="form-check-input"
                type="radio"
                name="city"
                id={item._id}
                onChange={() => {
                  updateCity(item);
                  onClose();
                }}
                value={item._id}
                checked={city?._id === item._id}
              />
              <label className="form-check-label" htmlFor={item._id}>
                {item.name}
              </label>
            </div>
          ))}
      </Modal.Body>
    </Modal>
  );
}

CityModal.propTypes = {
  show: PropTypes.bool,
  onclose: PropTypes.func,
};

export default memo(CityModal);
