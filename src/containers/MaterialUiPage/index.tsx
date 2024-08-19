import { FC, useRef, useState } from 'react'
import { produce } from 'immer'
import {
  Box,
  Button,
  Paper,
  Portal,
  Rating,
  styled,
  ThemeProvider,
  Typography,
  Stack,
  ListItem,
  Theme,
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { theme } from 'src/theme/material'

const DemoButton = styled(Button)(() => ({
  color: 'red',
  fontSize: '1.25rem',
  '&:hover': {
    fontSize: '1.5rem',
  },
}))

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
  const [show, setShow] = useState(false)
  const container = useRef(null)

  const handleShowClick = () => {
    setShow(!show)
  }

  const nextState = produce(baseState, draft => {
    draft[1].done = true
    draft.push({ title: 'Tweet about it' })
  })

  return (
    <ThemeProvider theme={theme as Theme}>
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
          <Typography variant="h2" color={theme.palette.custom.border}>
            Hi there
          </Typography>
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
      <Box sx={{ padding: '2rem' }}>
        {nextState?.map((state, idx) => (
          <Box key={idx}>
            <Typography>{state.title}</Typography>
          </Box>
        ))}
      </Box>
      <div>
        <button type="button" onClick={handleShowClick}>
          {show ? 'Unmount children' : 'Mount children'}
        </button>
        <Box sx={{ p: 1, my: 1, border: '1px solid' }}>
          It looks like I will render here.
          {show ? (
            <Portal container={() => container.current!}>
              <span>But I actually render here!</span>
            </Portal>
          ) : null}
        </Box>
        <Box sx={{ p: 1, my: 1, border: '1px solid red' }} ref={container} />
      </div>

      <Stack spacing={3} data-testid="item-stack">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </Stack>
    </ThemeProvider>
  )
}
