// IMPORTS


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import GlobalStyle from './config/stylesConfig';
import { Provider } from 'react-redux';
import store from './redux/store/reduxStore';


// RENDER


ReactDOM.render (
  <React.StrictMode>

    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);