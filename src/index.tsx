import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from "react-redux";
import { createStore } from 'redux';
import rootReducer from './reducers';
import './fonts/Quicksand-Bold.otf';
import './fonts/Quicksand-BoldItalic.otf';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
