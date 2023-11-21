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

const Root = (props) => {
  const { id, loading, createSession, children } = props;
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
    if (!id && !loading) {
      createSession();
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
      </ThemeProvider>
    </ColorContext.Provider>
  );
};

function mapStateToProps(state) {
  return {
    loading: state.session.loading,
    id: state.session.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createSession: () => dispatch(createSession()),
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Root);
