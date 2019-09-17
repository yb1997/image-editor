import * as React from "react";
import { render } from "react-dom";
import { MenuBar, Header, ToolDrawer } from "./components";

import "./styles.css";
import { Provider as ContextProvider } from "./context";
import { Provider, useDispatch } from "react-redux";
import { store } from "./_store";
import * as config from "./app.config.json";
import { IS_IMAGE_SELECTED } from "./_action-types";


export function App() {
  const [canvas, setCanvas] = React.useState<HTMLCanvasElement>(null);
  const [ctx, setCtx] = React.useState<CanvasRenderingContext2D>(null);
  const [originalImageData, setOriginalImageData] = React.useState<HTMLImageElement>(null); 

  const dispatch = useDispatch();

  React.useEffect(() => {
    if(canvas && ctx && originalImageData) {

      const aspectRatio = originalImageData.width / originalImageData.height;
      canvas.width = Math.min(canvas.width, originalImageData.width);
      canvas.height = canvas.width / aspectRatio;

      ctx.drawImage(originalImageData, 0, 0, canvas.width, canvas.height);
      ctx.save();
    }
  }, [canvas, ctx, originalImageData]);

  const addImage = (e: React.ChangeEvent) => {
    const img = new Image();
    const file = (e.target as HTMLInputElement).files[0];
    const fr = new FileReader();

    if(!file) return;

    img.onload = () => {
      setOriginalImageData(img);
      selectImage();
    }

    fr.onloadend = () => {
      img.src = fr.result as string;
    }

    fr.readAsDataURL(file);
  }

  function configureCanvas(canvas: HTMLCanvasElement) {
    if(canvas) {
      setCanvas(canvas);
      setCtx(canvas.getContext('2d'));
      
      canvas.width = config.CANVAS_WIDTH;
      canvas.height = 500;
    }
  }

  function selectImage() {
    dispatch({ type: IS_IMAGE_SELECTED, payload: { isImageSelected: true } });
  }


  return (
    <ContextProvider value={{ canvas, ctx, originalImageData }} >
      <div id="app">
        <Header />

        <div className="input-container">
          <input onChange={addImage} id="file-control" type="file" accept="image/*" />
        </div>

        <div className="canvas-container">
          <canvas ref={configureCanvas}></canvas>
        </div>

        <MenuBar />
        <ToolDrawer />
      </div>
    </ContextProvider>
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
