/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */


'use strict';

import {
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  FETCH_CUSTOMER,
  UPDATE_CUSTOMER
} from "./customer.actionType";

export function deleteCustomer(id) {
  return { type: DELETE_CUSTOMER, id }
}

export function fetchCustomer(id) {
  return { type: FETCH_CUSTOMER, id}
}

export function saveCustomer(customer) {
  if (customer.id) {
    return { type: UPDATE_CUSTOMER, customer }
  } else {
    return { type: CREATE_CUSTOMER, customer }
  }
}
