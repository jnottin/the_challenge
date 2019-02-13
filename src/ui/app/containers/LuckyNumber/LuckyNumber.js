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

import { CONTAINER_KEY } from '../constants';

class LuckyNumber extends React.PureComponent {
  render() {
    console.log('LuckyNumber');
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

function mapStateToProps(state) {
  // TODO: Get values from Redux store
  return {
    firstName: state.firstName,
    lastName: state.lastName
  };
}

export default connect(mapStateToProps)(LuckyNumber);
