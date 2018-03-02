// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App/App';
//
// ReactDOM.render(<App />, document.getElementById('app'));
//

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

render(App);

// HMR - SEE https://github.com/webpack/webpack-dev-server/issues/100
if(module.hot) {
  module.hot.accept();
}
