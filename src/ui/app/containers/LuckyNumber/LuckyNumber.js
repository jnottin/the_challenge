/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import LuckyNumberDisplay from 'components/LuckyNumberDisplay/LuckyNumberDisplay';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { CONTAINER_KEY } from '../constants';

class LuckyNumber extends React.PureComponent {
  render() {
    console.log('LuckyNumber');
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>
        {/* <h1>{firstName}</h1> */}
        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

LuckyNumberDisplay.propTypes = {
  firstName: PropTypes.any,
  lastName: PropTypes.any,
};

function mapStateToProps(rootState) {
  console.log('MapStateToProps: ');
  const userData = rootState.get('code-challenge/welcome');
  // const username = userData.values.get('username');
  const firstName = userData.values.get('firstName');
  const lastName = userData.values.get('lastName');
  return {
    firstName: firstName,
    lastName: lastName
  };
}

export default connect(mapStateToProps)(LuckyNumber);
