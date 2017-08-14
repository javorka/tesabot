/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/14/17.
 */


'use strict';
'use strict';
import { Map } from 'immutable';
import { LOADING_OVERLAY } from "../../action/general/general.actionType";

const defaultState = new Map({ isLoading: false });

export default function generalReducer(state = defaultState, action) {
  switch (action.type) {
    case LOADING_OVERLAY:
      return state.set('isLoading', action.isLoading);

    default:
      return state;
  }
}
