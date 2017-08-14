/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */


'use strict';
import { Map } from 'immutable';
import {
  CUSTOMER_CREATED, CUSTOMER_DELETED, CUSTOMER_FETCHED,
  CUSTOMER_UPDATED, CUSTOMERS_FETCHED
} from "../../action/customer/customer.actionType";

const defaultState = new Map();

export default function customerReducer(state = defaultState, action) {
  switch (action.type) {
    case CUSTOMER_CREATED:
      //some info message will be added
      return state;

    case CUSTOMER_UPDATED:
      //some info message will be added
      return state;

    case CUSTOMER_DELETED:
      //some info message will be added
      return state;

    case CUSTOMER_FETCHED:
      return state.set('customer', action.customer);

    case CUSTOMERS_FETCHED:
      return state.set('customers', action.customers);

    default:
      return state;
  }
}