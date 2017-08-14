/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/12/17.
 */


'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import SubscriptionForm from '../subscription/SubscriptionForm';
import { Button } from 'react-bootstrap';
import FormField from '../utils/FormField';
import { email, required } from "../../util/validation";

class CustomerEditForm extends React.Component {
  render() {
    const { invalid, submitting, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
          <Field className="form-control" label="Name" name="name" component={FormField} type="text" validate={[required]} placeholder="Name"/>
          <Field className="form-control" label="Email" name="email" component={FormField} validate={[required, email]} type="email" placeholder="Email"/>
        </div>
        <div className="col-md-6">
          <FieldArray name="subscriptions" component={SubscriptionForm}/>
        </div>
        <div className="pull-right">
          <Button type="submit" bsStyle="primary" disabled={invalid || submitting}>Submit</Button>
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
