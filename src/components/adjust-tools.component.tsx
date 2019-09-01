import * as React from "react";
import { Consumer } from "../context";

const TEMPLATE_ID = "adjust-tools";

// class AdjustToolsComponentCore {
//   unsubscribe: () => void;
//   invertToggle: HTMLInputElement;

//   constructor() {
//     debugger;
//     const drawerBody = document.querySelector(".drawer-body");

//     if(drawerBody) {
//       const template = document.getElementById(TEMPLATE_ID);
//       drawerBody.innerHTML = template ? template.innerHTML : "";
//     }


//     this.invertToggle = document.getElementById(
//       "image-invert-control"
//     ) as HTMLInputElement;

//     this.invertToggle.checked = store.getState().adjust.invertImage;

//     this.unsubscribe = store.subscribe(this.handleChange);
//   }

//   handleChange() {
//     const invertImage = store.getState().adjust.invertImage;

//     this.invertToggle.checked = invertImage;

//     this.invertImage();
//   }

//   onDestory() {
//     if (this.unsubscribe) this.unsubscribe();
//   }
// }

type propType = { ctx: CanvasRenderingContext2D | null }

export const AdjustToolsCore = (props: propType) => {
  const ctx = props.ctx;

  const invertImage = () => {
    const actualData = ctx.getImageData(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );

    const newImageData = new ImageData(
      actualData.data,
      actualData.width,
      actualData.height
    );

    const data = newImageData.data;
    const size = data.length;
    
    console.log(actualData.data);
    // invert color of each pixel
    for (let i = 0; i < size; i++) {
      if ((i + 1) % 4 === 0) {
        continue;
      }
      data[i] = 255 - data[i];
    }

    console.log(actualData.data);

    ctx.putImageData(newImageData, 0, 0);

    ctx.save();
  }

  const handleChange = () => {
    invertImage();
  }

  return (
    <div className="image-invert">
      <div className="toggle-wrapper">
        <input
          id="image-invert-control"
          name="image-invert-control"
          type="checkbox"
          className="toggle material-toggle"
          onChange={handleChange}
        />
      </div>
      <label htmlFor="image-invert-control">Invert Color</label>
    </div>
  );
};


export const AdjustTools = () => {
  return (
    <Consumer>
      {(props) => <AdjustToolsCore ctx={props.ctx} />}
    </Consumer>
  );
}
