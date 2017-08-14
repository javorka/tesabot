/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */


'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { saveCustomer, deleteCustomer, fetchCustomer } from '../../action/customer/customer.action';
import CustomerEditForm from '../../component/customer/CustomerEditForm';
import CustomerDeleteModal from '../../component/customer/CustomerDeleteModal';
import SubscriptionList from '../../component/subscription/SubscriptionList';

class CustomerEdit extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { isModalOpen: false };
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
    if (!isNaN(id)) {
      this.props.fetchCustomer(id);
    }
  }

  render() {
    const id = Number(this.props.match.params.id);
    const isNewUser = isNaN(id);
    const initialValues = isNewUser ? null : this.props.customer;

    return <div>
      {this.props.customer && <div className="pull-right">
        <Button bsStyle="danger" onClick={this.showModal}>Delete</Button>
      </div>}
      <h1>{isNewUser ? 'New Customer' : 'Edit Customer'}</h1>
      <div className="col-md-7">
        <CustomerEditForm initialValues={initialValues} handleSubmit={this.props.saveCustomer} />
      </div>
      <div className="col-md-5">
        <SubscriptionList subscriptions={this.props.customer.subscriptions} onDelete={() => console.log('a')}/>
      </div>
      {this.props.customer && <CustomerDeleteModal customer={this.props.customer} callback={this.closeModal} isModalOpen={this.state.isModalOpen}/>}
    </div>
  }
}

CustomerEdit.propTypes = {
  fetchCustomer: PropTypes.func.isRequired,
  saveCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  customer: PropTypes.object,
};

function mapStateToProps(state) {
  const customerState = state.customer.toJS();
  return { customer: customerState.customer }
}

export default connect(mapStateToProps, {
  fetchCustomer,
  saveCustomer,
  deleteCustomer
})(CustomerEdit)

