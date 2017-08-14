/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/12/17.
 */


'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';

class CustomerEditForm extends React.Component {
  render() {
    const { pristine, submitting, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field className="form-control" name="name" component="input" type="text" placeholder="Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field className="form-control" name="email" component="input" type="email" placeholder="Email"/>
        </div>
        <div className="pull-right">
          <Button type="submit" bsStyle="primary" disabled={pristine || submitting}>Submit</Button>
        </div>
      </form>
    );
  }
}

CustomerEditForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'customerEditForm',
  enableReinitialize: true
})(CustomerEditForm);
