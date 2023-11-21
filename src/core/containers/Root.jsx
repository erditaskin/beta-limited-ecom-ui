import * as React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createSession } from "core/actions/session";
import { useEffect, useState, useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "core/themes/light";
import { darkTheme } from "core/themes/dark";
import { ColorContext } from "core/contexts/ColorContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BaseLayout from "core/layout/BaseLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = (props) => {
  const { id, loading, createSession, children } = props;
  const [isMounted, setMounted] = useState(false);
  const [mode, setMode] = useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!id && !loading) {
      createSession().then(() => {
        toast.info("Session created");
      });
    }
  }, [id, loading, createSession]);

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {id && !loading ? (
          <BaseLayout>{children}</BaseLayout>
        ) : (
          <div style={{ height: "100vh", width: "100%" }}>
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        )}
        {isMounted && (
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
            theme="colored"
          />
        )}
      </ThemeProvider>
    </ColorContext.Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.session.loading,
    id: state.session.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSession: () => dispatch(createSession()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Root);
