/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LuckyNumberDisplay extends React.PureComponent {
  render() {
    const { firstName, lastName, luckyNumber } = this.props;
    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        <h2>Hello, {firstName} {lastName}!</h2>
        <h2>Your lucky number is {luckyNumber}</h2>
        {/* <h2>Lucky Number: {this.state.luckyNumComp}</h2> */}
      </div>
    );
  }
}

LuckyNumberDisplay.propTypes = {
  firstName: PropTypes.any,
  lastName: PropTypes.any,
  luckyNumber: PropTypes.any,
};

export default LuckyNumberDisplay;
