/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/12/17.
 */


'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Button, Glyphicon } from 'react-bootstrap';

export default class SubscriptionForm extends React.PureComponent {
  render() {

    const subscriptionTypes = [
      { name: 'Trial', value: 'trial' },
      { name: 'Annual', value: 'annual' },
      { name: 'Monthly', value: 'monthly' },
    ];

    return (
      <div>
        {this.props.fields.map((s, index) =>
          <div key={index} className="well">
            <div className="pull-right">
              <Button onClick={() => this.props.removeSubscription(index)} bsSize="small" bsStyle="danger"><Glyphicon
                glyph="trash"/></Button>
            </div>
            <h4>Subscription # {index + 1}.</h4>
            <hr/>
            <div className="form-group">
              <label htmlFor={`${s}.from`}>Date from</label>
              <Field className="form-control" name={`${s}.from`} type="text" component="input"/>
            </div>
            <div className="form-group">
              <label htmlFor={`${s}.to`}>Date to</label>
              <Field className="form-control" name={`${s}.to`} type="text" component="input"/>
            </div>
            <div className="form-group">
              <label htmlFor={`${s}.type`}>Subscription type</label>
              <Field className="form-control" name={`${s}.type`} component="select">
                <option>-- not selected --</option>
                {subscriptionTypes.map(type =>
                  <option key={type.value} value={type.value}>{type.name}</option>
                )}
              </Field>
            </div>
          </div>
        )}
      </div>
    );
  }
}

SubscriptionForm.propTypes = {
  removeSubscription: PropTypes.func.isRequired
};
