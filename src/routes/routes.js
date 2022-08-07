import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { HomeScreen, DetailsScreen, PropertiesScreen } from "_screens";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/properties" element={<PropertiesScreen />} />
        <Route path="/properties/:id" element={<DetailsScreen />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
