import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from 'views/Home';
import Informations from 'views/Informations';
import Custom from 'views/Custom';
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
            exact
            path={routes.info}
            component={Informations}
          />
          <Route
            exact
            path={routes.custom}
            render={() => (
              <Redirect
                to={`${routes.custom}/step/1`}
              />
            )}
          />
          <Route
            path={routes.customSteps}
            component={Custom}
          />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
}

export default Root;
