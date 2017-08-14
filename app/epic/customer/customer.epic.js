/**
 * Created by peter on 11/3/16.
 */

'use strict';

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import {
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  FETCH_CUSTOMER,
  FETCH_CUSTOMERS,
  UPDATE_CUSTOMER
} from "../../action/customer/customer.actionType";
import {
  customerCreated,
  customerDeleted,
  customerFetched,
  customersFetched,
  customerUpdated
} from "../../action/customer/customer.action";
import { push } from 'react-router-redux';
import { startLoading, stopLoading } from "../../action/general/general.action";

const MOCK_API_DELAY = 250;

function fetchCustomers(action$) {
  return action$.ofType(FETCH_CUSTOMERS)
    .flatMap(() => Observable.concat(
      Observable.of(startLoading()),
      Observable.fromPromise(fetch('/data/MOCK_DATA.json')
        .then(response => response.json()))
        .delay(MOCK_API_DELAY)
        .map(customersFetched),
      Observable.of(stopLoading())
    ));
}

function updateCustomer(action$) {
  return action$.ofType(UPDATE_CUSTOMER)
    .flatMap(() => Observable.concat(
      Observable.of(startLoading()),
      Observable.of(customerUpdated())  //result from server
        .delay(MOCK_API_DELAY),
      Observable.of(stopLoading())
    ))
}

function deleteCustomer(action$) {
  return action$.ofType(DELETE_CUSTOMER)
    .flatMap(() => Observable.concat(
      Observable.of(startLoading()),
      Observable.of(customerDeleted())    //result from server
        .delay(MOCK_API_DELAY),
      Observable.of(stopLoading()),
      Observable.of(push('/customers'))
    ))
}

function fetchCustomer(action$) {
  return action$.ofType(FETCH_CUSTOMER)
    .flatMap(customer => Observable.concat(
      Observable.of(startLoading()),
      Observable.fromPromise(fetch('/data/MOCK_DATA.json')
        .then(response => response.json()))
        .delay(MOCK_API_DELAY)
        .map(items => items.find(item => item.id === customer.id))
        .map(customerFetched),
      Observable.of(stopLoading())
    ))
}

function createCustomer(action$) {
  return action$.ofType(CREATE_CUSTOMER)
    .flatMap(() => Observable.concat(
      Observable.of(startLoading()),
      Observable.of(customerCreated())  //result from server
        .delay(MOCK_API_DELAY),
      Observable.of(stopLoading())
    ))
}

export default combineEpics(
  fetchCustomers,
  fetchCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
);