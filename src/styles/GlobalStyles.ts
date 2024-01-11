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
`;

export default GlobalStyles;
