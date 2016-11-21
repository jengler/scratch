//import { Router } from './router/Router.jsx';
import { Record } from 'immutable';
import Rx from 'rxjs/Rx';

window.Rx = Rx;

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';
import dogReducer from './reducers/dog_reducer.js';
import BarkMessage from './containers/bark_message.js';
import BarkButton from './containers/bark_button.js';

import { makeBark, petDog, Counter, Press } from './actions/dog_actions.js';

const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

const pingEpic = action$ =>
  action$.ofType('PET_DOG')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo(makeBark());

const pongEpic = action$ =>
  action$.takeUntil(action$.ofType('CLICK'))
    .ofType('MAKE_BARK')
    .delay(1500) // Asynchronously wait 1000ms then continue
    .mapTo(petDog());

// Observable const $input = Rx.Observable.fromEvent(document, 'keydown')
// Epic:
document.addEventListener('keydown', (e) => store.dispatch(Press(e.ctrlKey, e.which)))
const $adderEpic = (action$, store) =>
    action$.ofType('PRESS')
    .filter(e => e.payload.c)
    .map(e => e.payload.v)
    .filter(c => c === 187)
    .mapTo(Counter(1))

const $subEpic = (action$, store) =>
    action$.ofType('PRESS')
    .filter(e => e.payload.c)
    .map(e => e.payload.v)
    .filter(c => c === 189)
    .mapTo(Counter(-1))


// const $plus = $chars.filter(c => c === 187)
// const $minus = $chars.filter(c => c === 189)

// const $add = $plus.map(() => 1)
// const $subtract = $minus.map(() => -1)

// const $counter = Rx.Observable.merge( $add, $subtract)
//     .scan((sum, n) => sum + n, 0)
//     .mapTo(v => Counter(v))

//const $subscriber = $counter.subscribe(v => store.dispatch(Counter(v)))


export const rootEpic = combineEpics(
  pingEpic,
  pongEpic,
  $adderEpic,
  $subEpic,
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(combineReducers({
    dog: dogReducer,
  }),
  applyMiddleware(epicMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage />
      <BarkButton />
      <input type="button" value="click" onClick={() => store.dispatch({type: 'CLICK'})}/>

    </div>
  </Provider>
  , document.querySelector('#app')
);
