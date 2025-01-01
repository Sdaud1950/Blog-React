import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { UseToggleProvider } from "./Component/Context"; // Import the context provider

ReactDOM.render(
  <UseToggleProvider>
    <App />
  </UseToggleProvider>,
  document.getElementById("root")
);
