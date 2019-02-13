/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1
});


const initialStateForm = fromJS({
  username: 'initial Username',
  firstName: 'initial firstName',
  lastName: 'initial lastName',
  luckyNumber: -1
});


function reducer(state = initialStateForm, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.SUBMIT_WELCOME:
      // Collecting values from submit
      return {
        ...action.payload,
      };
    case DISPATCH_ACTIONS.RECEIVE_LUCKY_NUMBER:
      // Attemping to get Lucky Number
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
