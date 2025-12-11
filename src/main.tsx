import React from "react";
import ReactDOM from "react-dom/client";
import Optimus from "./app/App";
import "./css/style.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <Optimus />
  </React.StrictMode>
);