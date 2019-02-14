/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

const initialStateForm = fromJS({
  username: 'initial Username',
  firstName: 'initial firstName',
  lastName: 'initial lastName',
  luckyNumber: -1
});


function reducer(state = initialStateForm, action) {
  // console.log(action.payload);
  switch (action.type) {
    case DISPATCH_ACTIONS.SUBMIT_WELCOME:
      // Collecting values from submit
      return {
        ...action.payload,
      };
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER_SUCCESS:
      // Getting Lucky Number
      return Object.assign({}, state, {
        luckyNumber: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
