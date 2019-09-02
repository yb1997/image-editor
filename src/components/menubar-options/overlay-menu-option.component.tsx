import * as React from "react";
import { useDispatch } from "react-redux";

import { OPEN_TOOL_DRAWER } from "../../_action-types";
import { MenuOption } from "./index";

export const OverlayMenuOption = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        console.log("Overlay option clicked");
        dispatch({ type: OPEN_TOOL_DRAWER });
    }

    return (
        <MenuOption onClick={onClick} title="Overlay" icon="window-restore" />
    );
}