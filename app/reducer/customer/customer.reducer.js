/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */


'use strict';
import {Map, fromJS} from 'immutable';
import customers from '../../../data/MOCK_DATA.json';
import {
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  FETCH_CUSTOMER,
  UPDATE_CUSTOMER
} from "../../action/customer/customer.actionType";

const defaultState = new Map({
  customers: fromJS(customers)
});

export default function customerReducer(state = defaultState, action) {
  const CUSTOMERS_FIELD = 'customers';
  const CUSTOMER_FIELD = 'customer';

  switch (action.type) {
    case FETCH_CUSTOMER: {
      const customer = state.get(CUSTOMERS_FIELD).find(c => c.get('id') === action.id);
      return state.set(CUSTOMER_FIELD, customer);
    }
    case CREATE_CUSTOMER: {
      const customer = generateUserFields(action.customer, state.get(CUSTOMERS_FIELD));
      return state.update(CUSTOMERS_FIELD, customers => customers.push(fromJS(customer)));
    }
    case UPDATE_CUSTOMER: {
      let index = state.get(CUSTOMERS_FIELD).findIndex(c => c.get('id') === action.customer.id);
      if (index > -1) {
        return state.mergeIn([CUSTOMERS_FIELD, index], fromJS(action.customer))
      }
      return state;
    }
    case DELETE_CUSTOMER: {
      let index = state.get(CUSTOMERS_FIELD).findIndex(c => c.get('id') === action.id);
      if (index > -1) {
        return state.deleteIn([CUSTOMERS_FIELD, index]);
      }
      return state;
    }
    default:
      return state;
  }
}

function generateUserFields(customer, immutableCustomers) {
  const date = new Date();
  customer.dateRegistered = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  customer.id = immutableCustomers.size + 2;  //IDs are generated from 1
  return customer;
}