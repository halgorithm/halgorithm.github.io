import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#001064',
      contrastText: '#c5cae9' // #557
    },
    secondary: {
      light: '#6effff',
      main: '#00e5ff',
      dark: '#00b2cc',
      contrastText: '#e0f7fa'
    }
    // canvasColor: '#333355',
  }
});

export default theme;
