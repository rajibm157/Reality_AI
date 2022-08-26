import { memo, useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useContext } from "_contexts";
import { api } from "_utils";

function LocalityModal() {
  const {
    showLocalityModal,
    localities,
    updateLocality,
    resetLocality,
    hideLocality,
  } = useContext();
  const [allLocalities, setAllLocalities] = useState([]);
  const [filterLocalities, setFilterLocalities] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api
        .getLocalities()
        .catch((error) => toast.error(error.message));
      setAllLocalities(data?.localities);
      setFilterLocalities(data?.localities);
    })();
  }, []);

  const filter = useCallback(
    (params) => {
      const filterArr = allLocalities.filter((item) =>
        item.name.toLowerCase().includes(params.toLowerCase())
      );
      setFilterLocalities(filterArr);
    },
    [allLocalities]
  );

  return (
    <Modal
      show={showLocalityModal}
      className="all-modal"
      onHide={hideLocality}
      scrollable={true}
    >
      <Modal.Header>
        <Modal.Title>Desired Location</Modal.Title>
        <div>
          <button
            type="button"
            className="btn text-primary"
            onClick={hideLocality}
          >
            Apply
          </button>
          <button
            type="button"
            className="btn text-primary"
            onClick={() => resetLocality([])}
          >
            Reset
          </button>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg btn-light search-input"
            placeholder="Search Locality.."
            onChange={(e) => filter(e.target.value)}
          />
        </div>
        {filterLocalities &&
          filterLocalities.map((item) => (
            <div className="form-check md-radio mb-2" key={item._id}>
              <input
                className="form-check-input"
                type="checkbox"
                name="locality"
                id={item._id}
                onChange={() => updateLocality(item)}
                value={item._id}
                checked={localities?.includes(item)}
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

export default memo(LocalityModal);
