import { memo, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "_contexts";
import { api } from "_utils";

function BusinessModal() {
  const { businessType, updateBusinessType } = useContext();
  const [businessTypes, setBusinessTypes] = useState([]);
  const [filterBusinessType, setFilterBusinessType] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api
        .getBusinessTypes()
        .catch((error) => toast.error(error.message));
      setBusinessTypes(data.businessTypes);
      setFilterBusinessType(data.businessTypes);
    })();
  }, []);

  const filter = useCallback(
    (params) => {
      const filterArr = businessTypes.filter((item) =>
        item.title.toLowerCase().includes(params.toLowerCase())
      );
      setFilterBusinessType(filterArr);
    },
    [businessTypes]
  );

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
            <button
              type="button"
              className="btn text-primary"
              onClick={() => updateBusinessType(null)}
            >
              Reset
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg btn-light search-input"
                placeholder="Search Business Type.."
                onChange={(e) => filter(e.target.value)}
              />
            </div>
            {filterBusinessType &&
              filterBusinessType.map((item) => (
                <div className="form-check md-radio mb-2" key={item.title}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="business_type"
                    id={item._id}
                    onChange={() => updateBusinessType(item)}
                    value={item._id}
                    checked={businessType?._id === item._id}
                  />
                  <label className="form-check-label" htmlFor={item._id}>
                    {item.title}
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(BusinessModal);
