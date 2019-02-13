/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    // TODO: Receive props passed down from LuckyNumber container
    const { firstName, lastName } = this.props;
    console.log(firstName);
    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {/* TODO: Display the user's full name and their lucky number */}
        <h2>Hello, {firstName} {lastName}!</h2>
        <h2>Your lucky number is</h2>
        <h2>Lucky Number</h2>
      </div>
    );
  }
}

// TODO: Add PropTypes
LuckyNumberDisplay.propTypes = {
  firstName: PropTypes.any,
  lastName: PropTypes.any
};

export default LuckyNumberDisplay;
