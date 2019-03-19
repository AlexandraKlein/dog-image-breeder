import { css } from 'styled-components';

const palette = {
  "blue": {
    "primary": "#00a7cf",
    "secondary": "#ffb819",
    "tertiary": "#00c4b4",
    "success": "#00c4b4",
    "info": "#555387",
    "warning": "#ffb819",
    "danger": "#ff5a34",
    "blue": "#00a7cf",
    "gold": "#ffb819",
    "green": "#00c4b4",
    "orange": "#ff6c0c",
    "purple": "#555387",
    "red": "#ff5a34",
    "darkBlue": "#0085a5",
    "darkGold": "#e5a516",
    "darkGreen": "#3fae2a",
    "darkRed": "#e5512e"
  }
};

export const theme = {
  primary: palette.blue.primary,
  secondary:  palette.blue.secondary,
  tertiary:  palette.blue.tertiary,
  darkBlue:  palette.blue.darkBlue,
  red: palette.blue.red,
  orange: palette.blue.orange,
  white: '#fff',
  black: '#000',
};

export const fontStack = css`
  font-family: ${theme.fontFamily};
  color: ${theme.blue};
`;

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 576,
};

export const bp = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc
}, {});

export const bpm = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] -1}px) {
      ${css(...args)}
    }
  `;
  return acc
}, {});
