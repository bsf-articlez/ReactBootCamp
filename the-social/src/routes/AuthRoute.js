import React from "react";
import { Route } from "react-router-dom";
import Timeline from "containers/Timeline";

function AuthRoute() {
  return (
    <React.Fragment>
      <Route
        exact
        path="/timeline/:id?"
        component={Timeline}
        // <Route component={() => <h1>Not found</h1>} />
      />
    </React.Fragment>
  );
}

export default AuthRoute;
