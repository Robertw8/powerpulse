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
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .scrollbar-inner {
    &::-webkit-scrollbar {
      width: 6px;
    }

    @media screen and (min-width: 769px) {
      &::-webkit-scrollbar {
        width: 8px;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 12px;
      margin: 14px 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #efede81a;
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #efede84d;
    }
  }

  .scrollbar-outer {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: #efede81a;
      border-radius: 12px;
      margin-left: 16px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ef8964;
      border-radius: 12px;
    }
  }
`;

export default GlobalStyles;
