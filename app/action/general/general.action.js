/**
 *
 * @author Peter Javorka <peter.javorka@artin.cz>
 * @since 8/14/17.
 */


'use strict';
import { LOADING_OVERLAY } from "./general.actionType";

export function startLoading() {
  return { type: LOADING_OVERLAY, isLoading: true }
}

export function stopLoading() {
  return { type: LOADING_OVERLAY, isLoading: false }
}
