/**
 * constants.js
 *
 * This file contains some constants used in the Redux infrastructure.
 * It facilitates the centralization of the key values.
 */

export const CONTAINER_KEY = 'code-challenge/welcome';

// TODO: Add more action constants if needed
export const DISPATCH_ACTIONS = {
  GET_LUCKY_NUMBER: `${CONTAINER_KEY}/GET_LUCKY_NUMBER`,
  RECEIVE_LUCKY_NUMBER: `${CONTAINER_KEY}/RECEIVE_LUCKY_NUMBER`,
  SUBMIT_WELCOME: `${CONTAINER_KEY}SUBMIT_WELCOME`,
};
