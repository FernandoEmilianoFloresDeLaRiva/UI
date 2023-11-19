import React from "react";
import IndexRoute from "../router/IndexRouter/IndexRoute";
import { store } from "../redux/indexStore";
import { Provider } from "react-redux";

function IndexProvider() {
  return (
    <Provider store={store}>
      <IndexRoute />
    </Provider>
  );
}

export default IndexProvider;
