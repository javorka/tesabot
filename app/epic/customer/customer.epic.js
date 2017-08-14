/**
 * Created by peter on 11/3/16.
 */

'use strict';

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { FETCH_CUSTOMERS, UPDATE_CUSTOMER, DELETE_CUSTOMER, CREATE_CUSTOMER, FETCH_CUSTOMER } from "../../action/customer/customer.actionType";
import { customersFetched, customerCreated, customerFetched, customerUpdated, customerDeleted } from "../../action/customer/customer.action";
import { push } from 'react-router-redux';

const MOCK_API_DELAY = 250;

function fetchCustomers(action$) {
  return action$.ofType(FETCH_CUSTOMERS)
    .delay(MOCK_API_DELAY)
    .flatMap(() => Observable.fromPromise(fetch('/MOCK_DATA.json')
      .then(response => response.json())))
    .map(customersFetched)
}

function updateCustomer(action$) {
  return action$.ofType(UPDATE_CUSTOMER)
    .delay(MOCK_API_DELAY)
    .map(customerUpdated)
}

function deleteCustomer(action$) {
  return action$.ofType(DELETE_CUSTOMER)
    .delay(MOCK_API_DELAY)
    .mergeMap(() => Observable.merge(
      Observable.of(customerDeleted()),
      Observable.of(push('/customers'))
    ))
}

function fetchCustomer(action$) {
  return action$.ofType(FETCH_CUSTOMER)
    .delay(MOCK_API_DELAY)
    .flatMap(payload => Observable.fromPromise(fetch('/MOCK_DATA.json')
      .then(response => response.json()))
      .map(items => items.find(item => item.id === payload.id)))
    .map(customerFetched)
}

function createCustomer(action$) {
  return action$.ofType(CREATE_CUSTOMER)
    .delay(MOCK_API_DELAY)
    .map(customerCreated)
}

export default combineEpics(
  fetchCustomers,
  fetchCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
);