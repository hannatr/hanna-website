import { createTheme, adaptV4Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: '#003049',
    },
    secondary: {
      main: '#f77f00',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
}));

export default theme;
