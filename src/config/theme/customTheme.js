const white = '#F9F9F9';
const primaryColor= "#D4792E";

const smashNotesTheme = {
  breakpoints: {
    keys: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
    ],
    values: {
      xs: 0,
      lg: 1280,
      sm: 600,
      xl: 1920,
      md: 960,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': {
        minHeight: 64,
      },
    },
  },
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(37, 59, 49, .06),0px 1px 1px 0px rgba(37, 59, 49, .06),0px 2px 1px -1px rgba(37, 59, 49, .06)',
    '0px 1px 5px 0px rgba(37, 59, 49, .06),0px 2px 2px 0px rgba(37, 59, 49, .06),0px 3px 1px -2px rgba(37, 59, 49, .06)',
    '0px 1px 8px 0px rgba(37, 59, 49, .06),0px 3px 4px 0px rgba(37, 59, 49, .06),0px 3px 3px -2px rgba(37, 59, 49, .06)',
    '0px 2px 4px -1px rgba(37, 59, 49, .06),0px 4px 5px 0px rgba(37, 59, 49, .06),0px 1px 10px 0px rgba(37, 59, 49, .06)',
    '0px 3px 5px -1px rgba(37, 59, 49, .06),0px 5px 8px 0px rgba(37, 59, 49, .06),0px 1px 14px 0px rgba(37, 59, 49, .06)',
    '0px 3px 5px -1px rgba(37, 59, 49, .06),0px 6px 10px 0px rgba(37, 59, 49, .06),0px 1px 18px 0px rgba(37, 59, 49, .06)',
    '0px 4px 5px -2px rgba(37, 59, 49, .06), 0px 7px 10px 1px rgba(37, 59, 49, .06),0px 2px 16px 1px rgba(37, 59, 49, .06)',
    '0px 5px 5px -3px rgba(37, 59, 49, .06),0px 8px 10px 1px rgba(37, 59, 49, .06),0px 3px 14px 2px rgba(37, 59, 49, .06)',
    '0px 5px 6px -3px rgba(37, 59, 49, .06),0px 9px 12px 1px rgba(37, 59, 49, .06),0px 3px 16px 2px rgba(37, 59, 49, .06)',
    '0px 6px 6px -3px rgba(37, 59, 49, .06),0px 10px 14px 1px rgba(37, 59, 49, .06),0px 4px 18px 3px rgba(37, 59, 49, .06)',
    '0px 6px 7px -4px rgba(37, 59, 49, .06),0px 11px 15px 1px rgba(37, 59, 49, .06),0px 4px 20px 3px rgba(37, 59, 49, .06)',
    '0px 7px 8px -4px rgba(37, 59, 49, .06),0px 12px 17px 2px rgba(37, 59, 49, .06),0px 5px 22px 4px rgba(37, 59, 49, .06)',
    '0px 7px 8px -4px rgba(37, 59, 49, .06),0px 13px 19px 2px rgba(37, 59, 49, .06),0px 5px 24px 4px rgba(37, 59, 49, .06)',
    '0px 7px 9px -4px rgba(37, 59, 49, .06),0px 14px 21px 2px rgba(37, 59, 49, .06),0px 5px 26px 4px rgba(37, 59, 49, .06)',
    '0px 8px 9px -5px rgba(37, 59, 49, .06),0px 15px 22px 2px rgba(37, 59, 49, .06),0px 6px 28px 5px rgba(37, 59, 49, .06)',
    '0px 8px 10px -5px rgba(37, 59, 49, .06),0px 16px 24px 2px rgba(37, 59, 49, .06),0px 6px 30px 5px rgba(37, 59, 49, .06)',
    '0px 8px 11px -5px rgba(37, 59, 49, .06),0px 17px 26px 2px rgba(37, 59, 49, .06),0px 6px 32px 5px rgba(37, 59, 49, .06)',
    '0px 9px 11px -5px rgba(37, 59, 49, .06),0px 18px 28px 2px rgba(37, 59, 49, .06),0px 7px 34px 6px rgba(37, 59, 49, .06)',
    '0px 9px 12px -6px rgba(37, 59, 49, .06),0px 19px 29px 2px rgba(37, 59, 49, .06),0px 7px 36px 6px rgba(37, 59, 49, .06)',
    '0px 10px 13px -6px rgba(37, 59, 49, .06),0px 20px 31px 3px rgba(37, 59, 49, .06),0px 8px 38px 7px rgba(37, 59, 49, .06)',
    '0px 10px 13px -6px rgba(37, 59, 49, .06),0px 21px 33px 3px rgba(37, 59, 49, .06),0px 8px 40px 7px rgba(37, 59, 49, .06)',
    '0px 10px 14px -6px rgba(37, 59, 49, .06),0px 22px 35px 3px rgba(37, 59, 49, .06),0px 8px 42px 7px rgba(37, 59, 49, .06)',
    '0px 11px 14px -7px rgba(37, 59, 49, .06),0px 23px 36px 3px rgba(37, 59, 49, .06),0px 9px 44px 8px rgba(37, 59, 49, .06)',
    '0px 11px 15px -7px rgba(37, 59, 49, .06),0px 24px 38px 3px rgba(37, 59, 49, .06),0px 9px 46px 8px rgba(37, 59, 49, .06)',
  ],
  direction: 'ltr',
  overrides: {
    MuiDrawer: {
      paper: {
        background: '#262626',
        color: white,
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: 'none',
      },
    },
    MuiButton: {
      textPrimary: {
        background: primaryColor,
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'transparent',
      },
    },
    MuiBottomNavigationAction: {
      root: {
        maxWidth: '100%',
        color: '#7B7B7B',
      },
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: 'transparent',
      },
    },
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      standard: 300,
      short: 250,
      enteringScreen: 225,
      shorter: 200,
      leavingScreen: 195,
      shortest: 150,
      complex: 375,
    },
  },
  typography: {
    useNextVariants: true,
    h1: {
      color: white,
      fontSize: "3rem",
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h2: {
      color: white,
      fontSize: "2.5rem",
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
    },
    h3: {
      color: white,
      fontSize: "2rem",
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
    },
    h4: {
      color: white,
      fontSize: "1.7rem",
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 'bold',
    },
    h5: {
      color: white,
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 400,
      fontStyle: "italic",
    },
    h6: {
      color: white,
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
    },
    fontWeightLight: 300,
    fontWeightRegular: 400,
    button: {
      textTransform: 'uppercase',
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
    },
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    body2: {
      color: white,
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
    },
    caption: {
      color: 'rgba(0, 0, 0, 0.54)',
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
    },
    fontWeightMedium: 500,
    subtitle1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
    },
    body1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
    },
  },
  zIndex: {
    modal: 1300,
    snackbar: 1400,
    drawer: 1200,
    appBar: 1100,
    mobileStepper: 1000,
    tooltip: 1500,
  },
  shape: {
    borderRadius: 4,
  },
  props: {},
  palette: {
    tonalOffset: 0.2,
    background: {
      paper: '#fff',
      default: '#f6f6f6',
    },
    contrastThreshold: 3,
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#CECECE',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#5C5C5C',
      800: '#424242',
      900: '#212121',
      A700: '#616161',
      A100: '#d5d5d5',
      A400: '#303030',
      A200: '#aaaaaa',
    },
    text: {
      primary: '#3F3F3F',
      secondary: '#727272',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: '#00D1DD',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    secondary: {
      main: '#3f3f3f',
      light: 'rgb(118, 139, 148)',
      dark: 'rgb(58, 77, 85)',
      contrastText: '#FAFAFA',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    error: {
      main: '#FF0044',
      contrastText: '#fff',
    },
    type: 'light',
    action: {
      hoverOpacity: 0.08,
      hover: 'rgba(0, 0, 0, 0.08)',
      selected: 'rgba(37, 59, 49, .06)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      active: 'rgba(0, 0, 0, 0.54)',
    },
    primary: {
      main: white,
      contrastText: '#FAFAFA',
    },
    tertiary: {
      main: '#28c27d',
    },
  },
  themeName: 'SmashNotesTheme',
};

export default smashNotesTheme;
