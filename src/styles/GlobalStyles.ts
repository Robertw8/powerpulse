//! Глобальні стилі, тут нічого не чіпати

import { css } from '@emotion/react';
import Roboto from '../assets/fonts/Roboto-Regular.ttf';

const GlobalStyles = css`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
  }

  body {
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    background-color: #040404;
    color: #efede8;
  }

  button {
    cursor: pointer;
  }

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}`;

export default GlobalStyles;
