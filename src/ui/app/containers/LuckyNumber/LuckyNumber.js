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

function mapStateToProps(rootState) {
  const userData = rootState.get(CONTAINER_KEY);
  return {
    firstName: userData.values.get('firstName'),
    lastName: userData.values.get('lastName'),
    username: userData.values.get('username'),
    luckyNumber: userData.luckyNumber,
  };
}

export default connect(mapStateToProps)(LuckyNumber);
