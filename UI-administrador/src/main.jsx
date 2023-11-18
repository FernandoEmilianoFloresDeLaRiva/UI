import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexRoute from "./router/IndexRouter/IndexRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IndexRoute />
  </React.StrictMode>
);
