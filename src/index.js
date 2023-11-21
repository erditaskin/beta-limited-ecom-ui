import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "core/routes/AppRoutes";
import AppProvider from "core/providers/AppProvider";
import Root from "core/containers/Root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <Root>
      <AppRoutes />
    </Root>
  </AppProvider>
);
