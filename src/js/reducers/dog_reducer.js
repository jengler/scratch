import Immutable from 'immutable';
import { MAKE_BARK, PET_DOG, COUNTER } from '../actions/dog_actions';

const initialState = Immutable.Map({
  hasBarked: false,
  counter: 0
});

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_BARK:
      return state.set('hasBarked', action.payload);
    case PET_DOG:
      return state.set('hasBarked', action.payload);
    case COUNTER:
      return state.set('counter', state.get('counter') + action.payload);
    default:
      return state;
  }
};

export default dogReducer;
