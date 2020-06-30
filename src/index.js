import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import 'localization/i18n';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Root />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
