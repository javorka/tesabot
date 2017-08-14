/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */

'use strict';
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import customer from './customer/customer.reducer';
import general from './general/general.reducer';

export default combineReducers({
  customer,
  general,
  form,
  router
});