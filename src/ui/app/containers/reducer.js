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
  username: 'sdf',
  firstName: '',
  lastName: '',
  user: [],
  addingUser: false,
});

function reducer(state = initialStateForm, action, values) {
  console.log(action);
  // console.log(values);
  switch (action.type) {
    case DISPATCH_ACTIONS.SUBMIT_WELCOME:
      // APPROACH #1 attempting collect values from submit
      return {
        ...state,
        // Values are undefined but I know it will be values.x I need to call
        // username: values.username,
        // firstName: values.firstName,
        // lastName: values.lastName

        // Action gives the entire Map Object, when i really want just the values
        username: action,
        firstName: action,
        lastName: action
      };
    // APPROACH #2 attempting collect values from submit
    // return Object.assign({}, state, {
    //   addingUser: false,
    //   user: [
    //     ...state.user,
    //     action.user
    //   ]
    // });
    default:
      return state;
  }
}

export default reducer;
