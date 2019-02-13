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
    // console.log(firstName);
    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>
        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

LuckyNumberDisplay.propTypes = {
  firstName: PropTypes.any,
  lastName: PropTypes.any,
};

function mapStateToProps(state) {
  console.log('MapStateToProps: ');
  console.log(state);
  return {
    firstName: state.firstName,
    lastName: state.lastName
  };
}

export default connect(mapStateToProps)(LuckyNumber);
