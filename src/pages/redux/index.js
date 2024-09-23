import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, TextField, Grid, InputAdornment } from '@mui/material'
import { AddTask } from '@mui/icons-material'
import { Assignment } from '@mui/icons-material'
import { TodoList } from '../../components/redux/todo-list'
import { DoingList } from '../../components/redux/doing-list'
import { DoneList } from '../../components/redux/done-list'

function ReduxPage() {
  const navigate = useNavigate()

  const [todo, setTodo] = useState('')

  const addTodo = () => {
    setTodo('')
  }

  const handleTextChange = (event) => {
    setTodo(event.target.value)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      sx={{ backgroundColor: '#1382ED', minHeight: '100vh', color: 'white' }}
    >
      <Box display='flex' flexDirection='row' gap={2}>
        <Typography mt={2} variant='h3'>
          To-Do List Using Redux
        </Typography>
        <Button
          variant="contained"
          color='secondary'
          sx={{ marginTop: 2 }}
          onClick={() => navigate('/state')}
        >
          Todo List using State
        </Button>
      </Box>

      <Box mt={2} gap={2} display='flex' flexDirection='row' alignItems='center'>
        <TextField
          value={todo}
          onChange={handleTextChange}
          variant="outlined"
          color='secondary'
          sx={{ width: '50vw' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Assignment sx={{ color: 'black' }} />
              </InputAdornment>
            ),
          }}
        />
        <Button
          disabled={todo.length < 1}
          onClick={addTodo}
          endIcon={<AddTask />}
          variant="contained"
          color='secondary'
        >
          Add Todo
        </Button>
      </Box>
      <Grid mt={4} container justifyContent='space-around' >
        <Grid item xs={3} paddingBottom={2}>
          <Typography align='center' variant='h4'>
            To-Do
          </Typography>
          <TodoList />
        </Grid>
        <Grid item xs={3} paddingBottom={2}>
          <Typography align='center' variant='h4'>
            Doing
          </Typography>
          <DoingList />
        </Grid>
        <Grid item xs={3} paddingBottom={2}>
          <Typography align='center' variant='h4'>
            Done
          </Typography>
          <DoneList />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ReduxPage
