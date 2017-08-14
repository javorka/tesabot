/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */


'use strict';

import {
  CREATE_CUSTOMER, CUSTOMER_CREATED, CUSTOMER_DELETED, CUSTOMER_FETCHED, CUSTOMER_UPDATED, CUSTOMERS_FETCHED,
  DELETE_CUSTOMER,
  FETCH_CUSTOMER,
  FETCH_CUSTOMERS,
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

export function fetchCustomers() {
  return { type: FETCH_CUSTOMERS }
}

export function customerCreated(customer) {
  // id and dateRegistered will be generated on server side
  return { type: CUSTOMER_CREATED, customer }
}

export function customerUpdated(customer) {
  return { type: CUSTOMER_UPDATED, customer}
}

export function customerFetched(customer) {
  return { type: CUSTOMER_FETCHED, customer }
}

export function customersFetched(customers) {
  return { type: CUSTOMERS_FETCHED, customers }
}

export function customerDeleted(customer) {
  return { type: CUSTOMER_DELETED, customer }
}
