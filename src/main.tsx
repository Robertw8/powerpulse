import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';

import 'modern-normalize/modern-normalize.css';
import { GlobalStyles, theme } from './styles';
import { store } from './redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/fitness-app-frontend/">
      <Provider store={store}>
        <Global styles={GlobalStyles} />
        <ConfigProvider theme={theme}>
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
