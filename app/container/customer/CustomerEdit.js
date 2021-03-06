/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { saveCustomer, deleteCustomer, fetchCustomer } from '../../action/customer/customer.action';
import CustomerEditForm from '../../component/customer/CustomerEditForm';

class CustomerEdit extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { isModalOpen: false };
  }

  handleSubmit(values) {
    this.props.saveCustomer(values);
    this.props.push('/customers');
  }

  showModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal(result) {
    if (result) {
      this.props.deleteCustomer(this.props.match.params.id);
    }
    this.setState({ isModalOpen: false });
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.fetchCustomer(id);
  }

  render() {
    const customer = this.props.customer;

    return <div>
      <h1>Edit Customer</h1>
      <hr/>
      <div>
        <CustomerEditForm initialValues={customer} onSubmit={this.handleSubmit} />
      </div>
    </div>
  }
}

CustomerEdit.propTypes = {
  fetchCustomer: PropTypes.func.isRequired,
  saveCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  customer: PropTypes.object,
};

function mapStateToProps(state) {
  const customerState = state.customer.toJS();
  return { customer: customerState.customer }
}

export default connect(mapStateToProps, {
  fetchCustomer,
  saveCustomer,
  deleteCustomer,
  push
})(CustomerEdit)

