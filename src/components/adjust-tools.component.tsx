import { Consumer } from "../context";
import { Ref } from "react";

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

//   invertImage() {
//     const actualData = ctx.getImageData(
//       0,
//       0,
//       ctx.canvas.width,
//       ctx.canvas.height
//     );

//     const newImageData = new ImageData(
//       actualData.data,
//       actualData.height,
//       actualData.width
//     );

//     const data = newImageData.data;
//     const size = data.length;

//     // invert color of each pixel
//     for (let i = 0; i < size; i += 4) {
//       if (i + (1 % 4) === 0) {
//         continue;
//       }
//       data[i] = 255 - data[i];
//     }

//     ctx.putImageData(newImageData, 0, 0);

//     ctx.save();
//   }

//   onDestory() {
//     if (this.unsubscribe) this.unsubscribe();
//   }
// }

type propType = { ctx: CanvasRenderingContext2D | null }

export const AdjustTools = (props: propType) => {

  const handleChange = () => {
    console.log("canvasRef: ", props.ctx);
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


export const AdjustToolsComponent = () => {
  return (
    <Consumer>
      { (props) => <AdjustTools ctx={props.ctx} /> }
    </Consumer>
  );
}
