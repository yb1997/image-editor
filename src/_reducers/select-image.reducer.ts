import { AnyAction } from "redux";
import { IS_IMAGE_SELECTED } from "../_action-types";

export const isImageSelected = (state: boolean = false, action: AnyAction): boolean => {
    if (action.type === IS_IMAGE_SELECTED) {
        return action.payload.isImageSelected;
    }
    return state;
}