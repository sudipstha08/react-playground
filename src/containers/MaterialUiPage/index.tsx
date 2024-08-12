import { FC, useState } from 'react'
import { produce } from 'immer'
import {
  Box,
  Button,
  createTheme,
  Paper,
  Rating,
  styled,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { deepOrange, yellow } from '@mui/material/colors'

const DemoButton = styled(Button)(() => ({
  color: 'red',
  fontSize: '1.25rem',
  '&:hover': {
    fontSize: '1.5rem',
  },
}))

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: yellow[700],
      dark: yellow[900],
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

const baseState: Array<{ title: string; done?: boolean }> = [
  {
    title: 'Learn TypeScript',
    done: true,
  },
  {
    title: 'Try Immer',
    done: false,
  },
]

export const MaterialUiPage: FC = () => {
  const [rating, setRating] = useState<number | null>(null)

  const nextState = produce(baseState, draft => {
    draft[1].done = true
    draft.push({ title: 'Tweet about it' })
  })

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '30px',
        }}
      >
        <Box sx={{ width: '500px', display: 'flex', flexDirection: 'column' }}>
          <Button variant="contained">Click Me</Button>
          <Button
            disabled={rating === null}
            variant="contained"
            size="large"
            disableRipple
            disableElevation
            sx={{
              bgcolor: deepOrange[800],
              textTransform: 'none',
              fontSize: '1rem',
              borderColor: 'secondary.main',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: deepOrange[600],
              },
            }}
          >
            Rate Me
          </Button>
          <Typography variant="h2">Hi there</Typography>
          <Typography variant="h4">Rating: {rating}</Typography>
          <Rating value={rating} onChange={(_, value) => setRating(value)} />
        </Box>

        <Paper
          sx={{ height: '200px', width: '320px' }}
          elevation={0}
          variant="outlined"
          square
        >
          <DemoButton
            variant="contained"
            fullWidth
            disableRipple
            disableElevation
            color="secondary"
          >
            Styled Button
          </DemoButton>
        </Paper>
      </Box>
      <Box>
        {nextState?.map((state, idx) => (
          <Box key={idx}>
            <Typography>{state.title}</Typography>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  )
}
