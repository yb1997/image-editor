import * as React from "react";
import { render } from "react-dom";
import { MenuBar, Header, ToolDrawer } from "./components";

import "./styles.css";
import { Provider as ContextProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./_store";
import * as config from "./app.config.json";

type State = { canvas: HTMLCanvasElement | null, ctx: CanvasRenderingContext2D | null };


export class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.addImage = this.addImage.bind(this);
    this.configureCanvas = this.configureCanvas.bind(this);
    this.state = {
      canvas: null,
      ctx: null
    }
  }


  addImage(e: React.ChangeEvent) {
    const img = new Image();
    const file = (e.target as HTMLInputElement).files[0];
    const fr = new FileReader();
    const { canvas, ctx } = this.state;

    if(!file) return;

    img.onload = () => {
      if (canvas && ctx) {
        const aspectRatio = img.width / img.height;
        canvas.height = canvas.width / aspectRatio;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.save();
      }
    }

    fr.onloadend = () => {
      img.src = fr.result as string;
    }

    fr.readAsDataURL(file);
  }

  configureCanvas(canvas: HTMLCanvasElement) {
    this.setState((prevState, _props) => {
      return { ...prevState, canvas, ctx: canvas.getContext('2d') };
    }, () => {
      this.state.canvas.width = config.CANVAS_WIDTH;
      this.state.canvas.height = 500;
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ContextProvider value={{ canvas: this.state.canvas, ctx: this.state.ctx }} >
          <div id="app">
            <Header />

            <div className="input-container">
              <input onChange={this.addImage} id="file-control" type="file" accept="image/*" />
            </div>

            <div className="canvas-container">
              <canvas ref={this.configureCanvas}></canvas>
            </div>

            <MenuBar />
            <ToolDrawer />
          </div>
        </ContextProvider>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
