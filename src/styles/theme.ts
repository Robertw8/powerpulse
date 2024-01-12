//! Тема для ant-design, якщо вам потрібен інший колір для компоненту з ліби, змініть його у самому компоненті, тут нічого не змінювати
const theme = {
  token: {
    colorPrimary: '#E6533C',
    borderRadius: 12,
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
  },
};

//? Об'єкт з усіма кольорами та радіусами бордерів, якщо у когось є ідея як його використовувати а не тільки копіювати звідси кольори - дайте знати пліз
const themeExamples = {
  colors: {
    black: '#040404',
    orange: '#E6533C',
    lightOrange: '#EF8964',
    beige: '#EFA082',
    white: '#EFEDE8',
    white30: '#EFEDE84D',
    red: '#D80027',
    gray: '#1C1C1C',
  },
  radiuses: {
    primary: 12,
    secondary: 8,
  },
};

export { theme, themeExamples };
