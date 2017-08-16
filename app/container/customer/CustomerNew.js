/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {saveCustomer} from '../../action/customer/customer.action';
import CustomerEditForm from '../../component/customer/CustomerEditForm';

class CustomerEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.saveCustomer(values);
    this.props.push('/customers');
  }

  render() {
    const initialValues = {subscriptions: []};

    return <div>
      <h1>New Customer</h1>
      <hr/>
      <div>
        <CustomerEditForm initialValues={initialValues} onSubmit={this.handleSubmit}/>
      </div>
    </div>
  }
}

CustomerEdit.propTypes = {
  saveCustomer: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
};

export default connect(null, {
  saveCustomer,
  push
})(CustomerEdit)

