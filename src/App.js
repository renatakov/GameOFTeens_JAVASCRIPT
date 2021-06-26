import React, { Component, Suspense } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Suspense fallback="loading...">
          <Switch>
            {routes.map((e) => {
              return <Route key={e.path} {...e} />;
            })}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
