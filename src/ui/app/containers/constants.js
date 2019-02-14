/**
 * constants.js
 *
 * This file contains some constants used in the Redux infrastructure.
 * It facilitates the centralization of the key values.
 */

export const CONTAINER_KEY = 'code-challenge/welcome';

export const DISPATCH_ACTIONS = {
  GET_LUCKY_NUMBER: `${CONTAINER_KEY}/GET_LUCKY_NUMBER`,
  GET_LUCKY_NUMBER_SUCCESS: `${CONTAINER_KEY}/GET_LUCKY_NUMBER_SUCCESS`,
  GET_LUCKY_NUMBER_ERROR: `${CONTAINER_KEY}/GET_LUCKY_NUMBER_ERROR`,
  SUBMIT_WELCOME: `${CONTAINER_KEY}SUBMIT_WELCOME`,
};
