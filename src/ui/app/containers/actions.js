/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';


export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    payload: {
      username
    }
  };
}

export function receiveLuckyNumber(data) {
  return {
    type: DISPATCH_ACTIONS.RECEIVE_LUCKY_NUMBER,
    data
  };
}


// Passing values from submit
export const submitWelcome = (values) => ({
  type: DISPATCH_ACTIONS.SUBMIT_WELCOME,
  payload: {
    values
  }
});
