import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexProvider from "./Provider/IndexProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IndexProvider />
  </React.StrictMode>
);
