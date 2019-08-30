import * as React from "react";


export const MenuOption = (props: { onClick: (e: React.MouseEvent) => void, title: string, icon: string }) => {

  return (
    <>
      <input
        value={`${props.title.toLowerCase()}-control`}
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
        <i className={`fa fa-2x fa-${props.icon}`} aria-hidden="true"></i>
      </label>
    </>
  );
}

export const AdjustMenuOption = () => {
  const onClick = () => {
    console.log("Adjust option clicked");
  }

  return (
    <MenuOption onClick={onClick} title="Adjust" icon="adjust"/>
  )
}

export const OverlayMenuOption = () => {
  const onClick = () => {
    console.log("Overlay option clicked");
  }

  return (
    <MenuOption onClick={onClick} title="Overlay" icon="window-restore"/>
  )
}

export const TransformMenuOption = () => {
  const onClick = () => {
    console.log("transform option clicked");
  }

  return (
    <MenuOption onClick={onClick} title="Transform" icon="arrows" />
  )
}

export const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="tool-menu">
        <ul>
          <li>
            <AdjustMenuOption />
          </li>
          <li>
            <OverlayMenuOption />
          </li>
          <li>
            <TransformMenuOption />
          </li>
        </ul>
      </div>

      <div className="tool-drawer">
        <div className="close-drawer clear">
          <i className="fa fa-2x fa-times float-right" aria-hidden="true"></i>
        </div>
        <div className="drawer-body"></div>
      </div>
    </div>
  );
};
