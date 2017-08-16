/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteCustomer} from '../../action/customer/customer.action';
import CustomerDeleteModal from '../../component/customer/CustomerDeleteModal';
import {Glyphicon, Button} from 'react-bootstrap';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.state = {
      isModalOpen: false
    };
  }

  showModal(customer) {
    this.setState({
      isModalOpen: true,
      customer
    })
  }

  closeModal(result) {
    if (result) {
      this.deleteCustomer(this.state.customer);
    }
    this.setState({
      isModalOpen: false,
      customer: undefined
    });
  }

  deleteCustomer(customer) {
    this.props.deleteCustomer(customer.id);
  }

  render() {
    const customer = this.state.customer;
    return (
      <div>
        <h1>Customers</h1>
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date Registered</th>
            <th>Subscriptions</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {this.props.customers.map(c =>
            <tr key={c.id}>
              <td><Link to={`/customers/${c.id}`}>{c.name}</Link></td>
              <td>{c.email}</td>
              <td>{c.dateRegistered}</td>
              <td>{c.subscriptions.length}</td>
              <td>
                <Link to={`/customers/${c.id}`} className="btn btn-sm btn-primary">
                  <Glyphicon glyph="edit"/>
                </Link>
                <Button bsSize="small" bsStyle="danger" onClick={() => this.showModal(c)}>
                  <Glyphicon glyph="trash"/>
                </Button>
              </td>
            </tr>)}
          </tbody>
        </table>
        {customer &&
        <CustomerDeleteModal isModalOpen={this.state.isModalOpen} customer={customer} callback={this.closeModal}/>}
      </div>
    )
  }
}

CustomerList.propTypes = {
  customers: PropTypes.array,
  deleteCustomer: PropTypes.func.isRequired
};

CustomerList.defaultProps = {
  customers: []
};

function mapStateToProps(state) {
  const customerState = state.customer.toJS();
  return {customers: customerState.customers};
}

export default connect(mapStateToProps, {
  deleteCustomer
})(CustomerList);