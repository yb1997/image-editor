import * as React from "react";
import { render } from "react-dom";
import { MenuBar } from "./components";

import "./styles.css";
import { Provider } from "./context";


export class App extends React.Component {
  constructor(props: {}) {
    super(props);
    this.addImage = this.addImage.bind(this);
    this.configureCanvas = this.configureCanvas.bind(this);
  }

  ctx: CanvasRenderingContext2D | null = null;
  canvas: HTMLCanvasElement | null = null;


  addImage(e: React.ChangeEvent) {
    const img = new Image();
    const file = (e.target as HTMLInputElement).files[0];
    const fr = new FileReader();

    img.onload = () => {
      if (this.canvas && this.ctx) {
        this.canvas.width = 500;
        const aspectRatio = img.width / img.height;
        this.canvas.height = this.canvas.width / aspectRatio;

        this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      }
    }

    fr.onloadend = () => {
      img.src = fr.result as string;
    }

    fr.readAsDataURL(file);
  }

  configureCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.canvas.width = 500;
    this.canvas.height = 500;
  }

  render() {
    return (
      <Provider value={{ canvas: this.canvas, ctx: this.ctx }} >
        <div id="app">
          <div className="input-container">
            <input onChange={this.addImage} id="file-control" type="file" accept="image/*" />
          </div>

          <div className="canvas-container">
            <canvas ref={this.configureCanvas}></canvas>
          </div>

          <MenuBar />
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
