/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/12/17.
 */


'use strict';

import React from 'react';
import { Field } from 'redux-form';
import { Button, Glyphicon } from 'react-bootstrap';
import FormField from "../utils/FormField";
import { required } from "../../util/validation";

export default class SubscriptionForm extends React.PureComponent {
  render() {

    const subscriptionTypes = [
      { name: 'Trial', value: 'trial' },
      { name: 'Annual', value: 'annual' },
      { name: 'Monthly', value: 'monthly' },
    ];

    const { fields } = this.props;

    return (
      <div>
        {fields.map((s, index) =>
          <div key={index} className="row well">
            <div className="pull-right">
              <Button onClick={() => fields.remove(index)} bsSize="small" bsStyle="danger"><Glyphicon
                glyph="trash"/></Button>
            </div>
            <h4>Subscription # {index + 1}.</h4>
            <hr/>
            <Field className="form-control" label="Date from" name={`${s}.from`} component={FormField} type="text" validate={[required]} placeholder="Date from"/>
            <Field className="form-control" label="Date to" name={`${s}.to`} component={FormField} type="text" validate={[required]} placeholder="Date from"/>
            <div className="form-group">
              <label htmlFor={`${s}.type`}>Subscription type</label>
              <Field className="form-control" name={`${s}.type`} component="select">
                {subscriptionTypes.map(type =>
                  <option key={type.value} value={type.value}>{type.name}</option>
                )}
              </Field>
            </div>
          </div>
        )}
        <div className="text-center">
          <Button bsStyle="primary" onClick={() => fields.push({})}>Add subscription</Button>
        </div>
      </div>
    );
  }
}