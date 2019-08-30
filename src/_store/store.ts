import { createStore } from "redux";
import { rootReducer } from "../_reducers/root.reducer";

export const store = createStore(rootReducer);
