import { theme } from '@chakra-ui/core';
// import 'typeface-roboto';

export const customTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    ...theme.colors,
    // Go to https://smart-swatch.netlify.com/ to easily generate a new color palette.

    lightWhite: '#F7FAFB',

    gray: {
      50: '#ECF1F0',
      100: '#D0DBD9',
      200: '#B3CAC5',
      300: '#97B4AE',
      400: '#7C9F97',
      500: '#62857E',
      600: '#4B6862',
      700: '#334A46',
      800: '#1C2D2A',
      900: '#00120D',
    },

    success: {
      50: '#e6fae8',
      100: '#c6e9c8',
      200: '#a4d9a6',
      300: '#82c984',
      400: '#5fb963',
      500: '#46a049',
      600: '#357c38',
      700: '#255927',
      800: '#133615',
      900: '#001400',
    },

    warning: {
      50: '#fff2de',
      100: '#fbd7b6',
      200: '#f3b88b',
      300: '#ed975f',
      400: '#e67433',
      500: '#cc6619',
      600: '#a05812',
      700: '#73460c',
      800: '#462f03',
      900: '#1e1100',
    },

    danger: {
      50: '#ffe3e8',
      100: '#feb6be',
      200: '#ffd07d',
      300: '#f25969',
      400: '#ee2b3e',
      500: '#d41125',
      600: '#a60b1c',
      700: '#770613',
      800: '#4a0109',
      900: '#1f0001',
    },

    brand: {
      50: '#e5eeff',
      100: '#bbcbf9',
      200: '#8fa8ef',
      300: '#6485e8',
      400: '#3a63e0',
      500: '#2049c6',
      600: '#17399b',
      700: '#0f2970',
      800: '#061845',
      900: '#00081c',
    },

    brandSecondary: {
      50: '#e3f6ff',
      100: '#c3e0ec',
      200: '#a2cadb',
      300: '#80b5cc',
      400: '#5da0bc',
      500: '#4587a3',
      600: '#33697f',
      700: '#234b5c',
      800: '#0f2e3a',
      900: '#001118',
    },
  },
};
