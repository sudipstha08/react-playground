import { createTheme } from '@mui/material'
import { deepOrange, yellow } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: yellow[700],
      dark: yellow[900],
    },
    custom: {
      border: 'green',
      main: '#ccc',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '14px',
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          width: '100%',
          '&:hover': {
            fontSize: '1.5rem',
          },
        },
      },
    },
  },
})
