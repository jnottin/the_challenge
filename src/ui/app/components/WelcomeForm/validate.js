/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */


// Validation is ready just values are not displaying correctly
export const validate = (values) => {
  const username = values.get('username');
  const firstName = values.get('firstName');
  const lastName = values.get('lastName');

  const errors = {};

  if (!username) {
    errors.username = true;
  }
  if (!firstName) {
    errors.firstName = true;
  }
  if (!lastName) {
    errors.lastName = true;
  }

  return errors;
};
