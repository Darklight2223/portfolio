import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
// import Snowfall from "react-snowfall";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <Snowfall /> */}
    <App />
    <Toaster />
  </>
);
