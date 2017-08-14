/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/14/17.
 */

import React from 'react';

'use strict';

export default class FormField extends React.PureComponent {
  render() {
    const { input, label, type, meta: { touched, error } } = this.props;

    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" type={type} placeholder={label} {...input}/>
        {touched && error && <div className="help-block">{error}</div> }
      </div>
    );
  }
}

