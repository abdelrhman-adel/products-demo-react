import React from "react";
import { Route, Switch } from "react-router-dom";
import routesConfig from "./routesConfig";

import Error404Container from "./Error404Container/containers/Error404Container";
import LoadableRoute from "./LoadableRoute";

/**
 * return all the routes after configuring them
 * @returns {*}
 * @constructor
 */
const Routes = () => (
  <Switch>
    {routesConfig.map(({ path, component }) => (
      <Route exact key={path} path={path} render={LoadableRoute(component)} />
    ))}
    <Route component={Error404Container} />
  </Switch>
);

export default Routes;
