const theme = {
  token: {
    colorPrimary: '#E6533C',
    borderRadius: 12,
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
  },
};

interface Palette {
  colors: { [key: string]: string };
  radiuses: { [key: string]: string };
  fontSizes: { [key: string]: number };
  weights: { [key: string]: number };
}

const palette: Palette = {
  colors: {
    black: '#040404',
    orange: '#E6533C',
    lightOrange: '#EF8964',
    beige: '#EFA082',
    white: '#EFEDE8',
    white30: '#EFEDE84D',
    white20: '#EFEDE833',
    red: '#D80027',
    gray: '#1C1C1C',
  },
  radiuses: {
    primary: '12px',
    secondary: '8px',
    round: '50%',
  },
  fontSizes: {
    huge: 72,
    extraLarge: 48,
    large: 32,
    medium: 24,
    small: 18,
    default: 16,
    tiny: 14,
    caption: 12,
  },
  weights: {
    black: 900,
    bold: 700,
    semiBold: 600,
    normal: 400,
  },
};

export { theme, palette };
