/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/14/17.
 */

'use strict';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Loader extends React.PureComponent {
  render() {
    if (!this.props.isLoading) {
      return null;
    }
    return (
      <div className="loader">
        <img src="/assets/loader.svg"/>
      </div>
    )
  }
}

Loader.propTypes = {
  isLoading: PropTypes.bool
};

function mapStateToProps(state) {
  const generalState = state.general.toJS();
  return { isLoading: generalState.isLoading }
}

export default connect(mapStateToProps, {})(Loader)