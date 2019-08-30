import { TOGGLE_INVERT_IMAGE } from "../_action-types";
import { Action } from "redux";

export const initialState = {
  invertImage: false
};

export function adjustReducer(state = initialState, action: Action<string>) {
  switch (action.type) {
    case TOGGLE_INVERT_IMAGE:
      return { invertImage: !state.invertImage };
      break;
    default:
      return state;
  }
}
