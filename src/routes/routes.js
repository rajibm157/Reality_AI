import { memo, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { HomeScreen, DetailsScreen, PropertiesScreen } from "_screens";
import { Loading } from "_components";

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
              <PropertiesScreen />
            </Suspense>
          }
        />
        <Route
          path="/properties/:id"
          element={
            <Suspense fallback={<Loading show={true} />}>
              <DetailsScreen />
            </Suspense>
          }
        />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default memo(Routes);
