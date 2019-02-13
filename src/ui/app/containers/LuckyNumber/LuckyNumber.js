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
  componentDidMount() {
    const { dispatch } = this.props;
    const username = 'jnottin92@gmail.com';
    dispatch({ type: `${CONTAINER_KEY}GET_LUCKY_NUMBER`, payload: { username } });
  }
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

LuckyNumberDisplay.propTypes = {
  dispatch: PropTypes.func.isRequired,
  firstName: PropTypes.any,
  lastName: PropTypes.any,
  username: PropTypes.any,
};

function mapStateToProps(state) {
  console.log(state);
  return {
    firstName: state.firstName,
    lastName: state.lastName
  };
}

export default connect(mapStateToProps)(LuckyNumber);
