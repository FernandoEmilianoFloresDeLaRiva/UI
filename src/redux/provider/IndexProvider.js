import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productosSlice } from "../slices/productosSlice";
import IndexRoute from "../../router/IndexRouter/IndexRoute";

function IndexProvider() {
  return (
    <ApiProvider api={productosSlice}>
      <IndexRoute />
    </ApiProvider>
  );
}

export default IndexProvider;
