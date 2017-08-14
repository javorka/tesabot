/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/11/17.
 */

'use strict';
import { combineEpics } from 'redux-observable';
import customerEpic from './customer/customer.epic';

const rootEpic = combineEpics(customerEpic);
export default rootEpic;