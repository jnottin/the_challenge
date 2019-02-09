/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
// const initialState = fromJS({
//   luckyNumber: -1
// });

const initialStateForm = fromJS({
  username: 'sdf',
  firstName: '',
  lastName: '',
  user: [],
  addingUser: false,
});

function reducer(state = initialStateForm, action) {
  console.log(action.payload);
  switch (action.type) {
    case DISPATCH_ACTIONS.SUBMIT_WELCOME:
      // APPROACH #1 attempting collect values from submit
      return Object.assign({}, state, {
        username: action.payload,
        firstName: action.payload,
        lastName: action.payload
      });
    // APPROACH #2 attempting collect values from submit
    // return Object.assign({}, state, {
    //   addingUser: false,
    //   user: [
    //     ...state.user,
    //     action.user
    //   ]
    // });
    // TODO: Set things in the Redux store
    default:
      return state;
  }
}

export default reducer;
