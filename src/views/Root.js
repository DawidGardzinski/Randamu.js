import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Home from 'views/Home';
import Informations from 'views/Informations';
import MainView from 'views/MainView';
import { routes } from 'routes';

function Root() {
  return (
    <Provider store={store}>
      <MainTemplate>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
              component={MainView}
            />
            <Route
              exact
              path={routes.templates}
              render={() => (
                <Redirect
                  to={`${routes.templates}/step/1`}
                />
              )}
            />
            <Route
              path={routes.templatesSteps}
              component={MainView}
            />
          </Switch>
        </BrowserRouter>
      </MainTemplate>
    </Provider>
  );
}

export default Root;
