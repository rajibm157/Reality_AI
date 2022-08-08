import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "_routes/routes";
import ContextProvider from "_contexts";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <Routes />
    </ContextProvider>
  </React.StrictMode>
);
