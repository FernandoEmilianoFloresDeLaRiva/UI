import React from "react";
import IndexRoute from "../router/IndexRouter/IndexRoute";
import ProviderAuth from "./AuthContext/AuthContext";

function IndexProvider() {
  return (
    <ProviderAuth>
      <IndexRoute />
    </ProviderAuth>
  );
}

export default IndexProvider;
