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
  const errors = {};

  if (!values.username) {
    errors.username = true;
  }
  if (!values.firstName) {
    errors.firstName = true;
  }
  if (!values.lastName) {
    errors.lastName = true;
  }
  // console.log(errors);

  // TODO: Validate that the user has entered a username, first name, and last name

  // once values works correctly I will uncomment below
  // return errors;
};
