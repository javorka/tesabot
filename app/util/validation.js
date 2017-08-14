/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/14/17.
 */

'use strict';
export function required(value) {
  if ( !(value && value.length))
    return 'Required';
}

export function email(value) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(value)) {
    return 'Not an email';
  }
}

