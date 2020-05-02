import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from 'views/Home';
import Informations from 'views/Informations';
import { routes } from 'routes';

function Root() {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={routes.home}
            component={Home}
          />
          <Route
            path={routes.info}
            component={Informations}
          />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
}

export default Root;
