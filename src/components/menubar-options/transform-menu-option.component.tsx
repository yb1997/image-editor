import * as React from "react";
import { useDispatch } from "react-redux";

import { OPEN_TOOL_DRAWER } from "../../_action-types";
import { MenuOption } from ".";


export const TransformMenuOption = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        console.log("transform option clicked");
        dispatch({ type: OPEN_TOOL_DRAWER });
    }

    return (
        <MenuOption onClick={onClick} title="Transform" icon="arrows" />
    )
}