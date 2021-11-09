import React from 'react';
import ReactDOM from 'react-dom';

import Providers from './components/Providers';
import App from './components/App';

import 'normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,

  document.getElementById('root'),
);
