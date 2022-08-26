import { memo } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "_contexts";

function Guards({ children }) {
  const { businessType, city } = useContext();
  if (!city && !businessType) {
    toast.info("Please select a city and business type");
    return <Navigate to="/" />;
  }
  return children;
}

export default memo(Guards);
