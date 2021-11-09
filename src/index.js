import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import store from './redux/store';

import Providers from './components/Providers';
import App from './components/App';

import 'normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      {/* <Provider store={store.store}> */}
      {/* <PersistGate loading={null} persistor={store.persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Providers>
  </React.StrictMode>,

  document.getElementById('root'),
);
