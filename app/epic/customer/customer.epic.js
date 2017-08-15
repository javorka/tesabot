/**
 * Created by peter on 11/3/16.
 */

'use strict';

import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs';
import {
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  FETCH_CUSTOMER,
  FETCH_CUSTOMERS,
  UPDATE_CUSTOMER
} from "../../action/customer/customer.actionType";
import {
  customerDeleted,
  customerFetched,
  customersFetched,
} from "../../action/customer/customer.action";
import {push} from 'react-router-redux';
import {startLoading, stopLoading} from "../../action/general/general.action";

import data from '../../../data/MOCK_DATA.json';

const MOCK_API_DELAY = 250;

function fetchCustomers(action$) {
  return action$.ofType(FETCH_CUSTOMERS)
    .flatMap(() => Observable.concat(
      Observable.of(startLoading()),
      Observable.of(data)
        .delay(MOCK_API_DELAY)
        .map(customersFetched),
      Observable.of(stopLoading())
    ));
}

function updateCustomer(action$) {
  return action$.ofType(UPDATE_CUSTOMER)
    .flatMap(action => {
      updateCustomerInData(action.customer);
      return Observable.concat(
        Observable.of(startLoading()),
        Observable.of(stopLoading()).delay(MOCK_API_DELAY)
      )
    })
}

function deleteCustomer(action$) {
  return action$.ofType(DELETE_CUSTOMER)
    .flatMap(action => {
    deleteCustomerInData(action.id);
    return Observable.concat(
        Observable.of(startLoading()),
        Observable.of(customerDeleted())
          .delay(MOCK_API_DELAY),
        Observable.of(stopLoading()),
        Observable.of(push('/customers'))
      )
    })
}

function fetchCustomer(action$) {
  return action$.ofType(FETCH_CUSTOMER)
    .flatMap(customer => Observable.concat(
      Observable.of(startLoading()),
      Observable.of(data)
        .delay(MOCK_API_DELAY)
        .map(items => items.find(item => item.id === customer.id))
        .map(customerFetched),
      Observable.of(stopLoading())
    ))
}

function createCustomer(action$) {
  return action$.ofType(CREATE_CUSTOMER)
    .flatMap(action => {
      const customer = generateCustomerFields(action.customer);
      data.push(customer);
      return Observable.concat(
        Observable.of(startLoading()),
        Observable.of(stopLoading()).delay(MOCK_API_DELAY)
      );
    })
}

function generateCustomerFields(customer) {
  const date = new Date();
  customer.id = data[data.length-1].id+1;
  customer.dateRegistered = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return customer;
}

function updateCustomerInData(customer) {
  const index = data.findIndex(c => c.id === customer.id);
  if (index > -1) {
    data[index] = customer;
  }
}

function deleteCustomerInData(id) {
  const index = data.findIndex(c => c.id === id);
  if (index > -1) {
    data.splice(index, 1);
  }
}

export default combineEpics(
  fetchCustomers,
  fetchCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
);