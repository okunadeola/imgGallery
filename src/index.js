import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ImageContextProvider} from './ContextApi/ImageContext'


ReactDOM.render(
      <ImageContextProvider>
            <App />
      </ImageContextProvider>,
      document.getElementById("root")
);