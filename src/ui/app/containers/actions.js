/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

// APPROACH #1 attempting to pass values from submit
export const submitWelcome = (values) => ({
  type: DISPATCH_ACTIONS.SUBMIT_WELCOME,
  payload: {
    values
  }
});

// APPROACH #2 attempting to pass values from submit
// export function submitWelcome() {
//   return (dispatch, getState) => {
//     const form = getState().form;
//     const user = {
//       username: form.welcome.username.value,
//       firstName: form.welcome.firstName.value,
//       lastName: form.welcome.lastName.value
//     };
//     dispatch({
//       type: DISPATCH_ACTIONS.SUBMIT_WELCOME,
//       user
//     });
//   };
// }

// TODO: Add more actions if needed
