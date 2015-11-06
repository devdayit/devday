import './main.css';

import React from 'react';
import App from './app';

(function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  var rootInstance = React.render(<App/>, app);

  if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
      getRootInstances: function() {
        // Help React Hot Loader figure out the root component instances on the page:
        return [rootInstance];
      }
    });
  }
})();
