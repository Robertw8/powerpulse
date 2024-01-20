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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  fieldset {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
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

    @media screen and (max-width: 768px) {
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export default GlobalStyles;
