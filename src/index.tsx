import * as React from "react";
import { render } from "react-dom";
import { MenuBar, Header, ToolDrawer } from "./components";

import "./styles.css";
import { Provider, useDispatch } from "react-redux";
import { store } from "./_store";
import * as config from "./app.config.json";
import { IS_IMAGE_SELECTED, SET_CANVAS, SET_CANVAS_CONTEXT, SET_ORIGINAL_IMAGE_DATA } from "./_action-types";
import { ISetCanvasAction, ISetCanvasContextAction, ISetOriginalImage } from "./_reducers";


export function App() {
  const canvas = React.useRef<HTMLCanvasElement>(null);
  const ctx = React.useRef<CanvasRenderingContext2D>(null);
  const originalImage = React.useRef<HTMLImageElement>(null); 

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   if(canvas.current && ctx.current && originalImageData) {
  //     debugger;

  //     const aspectRatio = originalImageData.current.width / originalImageData.current.height;
  //     canvas.current.width = Math.min(canvas.current.width, originalImageData.current.width);
  //     canvas.current.height = canvas.current.width / aspectRatio;

  //     ctx.current.drawImage(originalImageData.current, 0, 0, canvas.current.width, canvas.current.height);
  //     ctx.current.save();
  //   }
  // }, []);

  const addImage = (e: React.ChangeEvent) => {
    const img = new Image();
    const file = (e.target as HTMLInputElement).files[0];
    const fr = new FileReader();

    if(!file) return;

    img.onload = () => {
      originalImage.current = img;

      const aspectRatio = originalImage.current.width / originalImage.current.height;
      canvas.current.width = Math.min(canvas.current.width, originalImage.current.width);
      canvas.current.height = canvas.current.width / aspectRatio;

      ctx.current.drawImage(originalImage.current, 0, 0, canvas.current.width, canvas.current.height);
      ctx.current.save();

      const originalImageData = ctx.current.getImageData(0, 0, canvas.current.width, canvas.current.height);
      
      dispatch<ISetOriginalImage>({ type: SET_ORIGINAL_IMAGE_DATA, payload: { originalImageData } });
      selectImage();
    }

    fr.onloadend = () => {
      img.src = fr.result as string;
    }

    fr.readAsDataURL(file);
  }

  function configureCanvas(c: HTMLCanvasElement) {
    if(c) {
      
      dispatch<ISetCanvasAction>({ type: SET_CANVAS, payload: { canvas: c } });
      dispatch<ISetCanvasContextAction>({ type: SET_CANVAS_CONTEXT, payload: { ctx: c.getContext("2d") } });

      c.width = config.CANVAS_WIDTH;
      c.height = 500;

      canvas.current = c;
      ctx.current = c.getContext("2d");
    }
  }

  function selectImage() {
    dispatch({ type: IS_IMAGE_SELECTED, payload: { isImageSelected: true } });
  }


  return (
    <div>
      <Header />

      <div className="input-container">
        <input onChange={addImage} id="file-control" type="file" accept="image/*" />
      </div>

      <main className="canvas-container">
        <canvas ref={configureCanvas}></canvas>
      </main>

      <MenuBar />
      <ToolDrawer />
    </div>
  );
}

const ReduxedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}


const rootElement = document.getElementById("root");
render(<ReduxedApp />, rootElement);
