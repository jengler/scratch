import React from 'react';
import ReactDOM from 'react-dom';
import { resolve } from 'universal-router';

import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';

import { HomeView, FormCreate } from '../homeview/HomeView.jsx';

import dogReducer from '../reducers/dog_reducer.js'
import BarkMessage from '../containers/bark-message.js';
import BarkButton from '../containers/bark-button.js';

const store = createStore(combineReducers({
  dog: dogReducer,
}));

const routes = [
  { path: '', action: () => <HomeView store={store}/> },
  { path: '/one', action: () => <HomeView store={store}/> },
  { path: '/two', action: () => <FormCreate store={store}/> },
  { path: '*', action: () => <h1>Not Found</h1> }
];

window.addEventListener('DOMContentLoaded', resolveIt);
window.addEventListener('hashchange', resolveIt);

function resolveIt() {
    resolve(routes, { path: location.hash.slice(1) }).then(component => {
      ReactDOM.render(
        <Provider store={store}>
          <div>
            <BarkMessage />
            <BarkButton />
          </div>
        </Provider>
      , document.getElementById('app'));
      // renders: <h1>Page One</h1>
    });
}
