import { memo, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { HomeScreen, DetailsScreen, PropertiesScreen } from "_screens";
import { Loading } from "_components";
import Guards from "./guards";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading show={true} />}>
              <HomeScreen />
            </Suspense>
          }
        />
        <Route
          path="/properties"
          element={
            <Suspense fallback={<Loading show={true} />}>
              <Guards>
                <PropertiesScreen />
              </Guards>
            </Suspense>
          }
        />
        <Route
          path="/properties/:id"
          element={
            <Suspense fallback={<Loading show={true} />}>
              <Guards>
                <DetailsScreen />
              </Guards>
            </Suspense>
          }
        />
      </Switch>
      <ToastContainer autoClose={2000} style={{ marginTop: "20px" }} />
    </BrowserRouter>
  );
}

export default memo(Routes);
