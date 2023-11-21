import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./ReduxProvider";

const AppProvider = (props) => {
  const { children } = props;
  return (
    <ReduxProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ReduxProvider>
  );
};

export default AppProvider;
