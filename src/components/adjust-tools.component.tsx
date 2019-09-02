import React, { useEffect, useState } from "react";
import { Consumer } from "../context";
import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "../_store";
import { TOGGLE_INVERT_IMAGE } from "../_action-types";


type propType = { ctx: CanvasRenderingContext2D | null }

export const AdjustToolsCore = (props: propType) => {
  const shallInvertImage = useSelector((p: AppStore) => p.invertImage);
  const dispatch = useDispatch();
  const [isFirstTime, setIsFirstTime] = useState(true);
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

    // invert color of each pixel
    for (let i = 0; i < size; i++) {
      if ((i + 1) % 4 === 0) {
        continue;
      }
      data[i] = 255 - data[i];
    }

    ctx.putImageData(newImageData, 0, 0);

    ctx.save();
  }

  useEffect(() => {
    if(!isFirstTime) {
      invertImage();
    } else {
      setIsFirstTime(false);
    }
  }, [shallInvertImage.present]);

  const handleChange = () => {
    dispatch({ type: TOGGLE_INVERT_IMAGE });
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
          checked={shallInvertImage.present}
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
