/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/12/17.
 */

'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

export default class CustomerDeleteModal extends React.PureComponent {
  render() {
    const customer = this.props.customer;
    return (
      <Modal show={this.props.isModalOpen} onHide={() => this.props.callback()}>
        <Modal.Header closeButton>
          <h3>Delete customer <strong>{customer.name}</strong>?</h3>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure, that you want to delete the following customer?</h4>
          <br/>
          <dl className="dl-horizontal">
            <dt>Name</dt>
            <dd>{customer.name}</dd>
            <dt>Email</dt>
            <dd>{customer.email}</dd>
            <dt>Date registered</dt>
            <dd>{customer.dateRegistered}</dd>
          </dl>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={() => this.props.callback()}>Cancel</Button>
          <Button bsStyle="danger" onClick={() => this.props.callback(true)}>Delete</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

CustomerDeleteModal.propTypes = {
  isModalOpen: PropTypes.bool,
  customer: PropTypes.any.isRequired,
  callback: PropTypes.func.isRequired
};

CustomerDeleteModal.defaultProps = {
  isModalOpen: false
};