import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Spinner, ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ReactQueryDevtools } from 'react-query-devtools';
import { customTheme } from 'theme/customTheme';
import App from './App';
import 'config/axios';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
