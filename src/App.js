import React from 'react';
import "./scss/index.scss";
import { Body } from './ui/components/Body';
import { Header } from './ui/components/Header';
import Nav from './ui/components/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './config/theme/theme';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div className="p-body">
            <Router>
              <Header />
              <div className="p-body__main">
                <Body />
              </div>
              <Nav />
            </Router>
          </div>
      </MuiThemeProvider>
    </>
  );
};

export default App;
