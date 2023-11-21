import * as React from "react";
import { matchPath, withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import { moduleRoutes } from "core/helpers";
import PageNotFound from "core/containers/PageNotFound";
import modules from "modules";

const AppRoutes = (props) => {
  const routes = moduleRoutes(modules);
  let route = routes.find((route) => {
    return !!matchPath(props.history?.location?.pathname, route);
  });

  if (route) {
    // when route matches
  }

  return (
    <Switch>
      {routes.map((value, idx) => {
        const { component, ...routeProps } = value;
        return (
          <Route {...routeProps} render={withRouter(component)} key={idx} />
        );
      })}
      <Route component={withRouter(PageNotFound)} />
    </Switch>
  );
};

export default AppRoutes;
