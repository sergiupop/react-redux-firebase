import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import * as serviceWorker from './serviceWorker';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import firebaseConfig from './config/firebaseConfig';

import './index.css';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig),
    reduxFirestore(firebaseConfig)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
