// NOT IN USE FOR NOW
import { TOGGLE_INVERT_IMAGE } from "../_action-types";
import { AnyAction } from "redux";
import { Reducer } from "react";
import undoable, { StateWithHistory } from "redux-undo";

const initialState: { invertImage: StateWithHistory<boolean> } = {
  invertImage: {
    past: [],
    present: false,
    future: []
  }
};

const invertImageReducerCore = (state = false, action: AnyAction) => {
  return !state;
};

const invertImageReducer = undoable(invertImageReducerCore);

const adjustReducerCore: Reducer<{ invertImage: StateWithHistory<boolean> }, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INVERT_IMAGE:
      return { invertImage: invertImageReducer(state.invertImage, action) };
    default:
      return state;
  }
}

export const adjustReducer = undoable(adjustReducerCore);