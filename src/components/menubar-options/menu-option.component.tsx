import * as React from "react";

export const MenuOption = (props: { onClick: (e: React.MouseEvent) => void, title: string, icon: string }) => {

    return (
        <>
            <input
                value={`${props.title.toLowerCase()}-control`
                }
                name="menu-control"
                className="menu-control"
                id={`${props.title.toLowerCase()}-control`}
                type="radio"
                onClick={props.onClick}
            />
            <label
                className="menu-tool"
                htmlFor={`${props.title.toLowerCase()}-control`}
                title={props.title}
            >
                <i className={`fa fa-2x fa-${props.icon}`} aria-hidden="true" ></i>
            </label>
        </>
    );
}