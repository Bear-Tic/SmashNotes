import React from 'react';
import "./scss/index.scss";
import { SignUp } from './ui/pages/SignUp';
import { Header } from './ui/components/Header';
import { Nav } from './ui/components/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './config/theme/theme';

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div className="p-body">
            <Header />
            <SignUp />
            <Nav />
          </div>
      </MuiThemeProvider>
    </>
  );
};

export default App;
