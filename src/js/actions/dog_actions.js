import { createAction } from 'redux-actions';

export const MAKE_BARK = 'MAKE_BARK';
export const makeBark = createAction(MAKE_BARK, () => true);

export const PET_DOG = 'PET_DOG';
export const petDog = createAction(PET_DOG, () => false);

export const COUNTER = 'COUNTER';
export const Counter = createAction(COUNTER, (v) => v);

export const PRESS = 'PRESS';
export const Press = (c, v) => { return {type: 'PRESS', payload: {c, v} }};
