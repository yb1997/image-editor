import * as React from "react";
import { useDispatch } from "react-redux";

import { OPEN_TOOL_DRAWER } from "../../_action-types";
import { MenuOption } from "./index";

export const AdjustMenuOption = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        console.log("Adjust option clicked");
        dispatch({ type: OPEN_TOOL_DRAWER });
    }

    return (
        <MenuOption onClick={onClick} title="Adjust" icon="adjust" />
    )
}