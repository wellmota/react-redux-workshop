import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, TextField, Grid, InputAdornment } from '@mui/material'
import { AddTask } from '@mui/icons-material'
import { Assignment } from '@mui/icons-material'
import { TodoList } from '../../components/state/todo-list'
import { DoingList } from '../../components/state/doing-list'
import { DoneList } from '../../components/state/done-list'

function StatePage() {
  const navigate = useNavigate()
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [doing, setDoing] = useState([])
  const [done, setDone] = useState([])

  const addTodo = () => {
    setTodos([...todos, { text: todo, status: 'Todo' }])
    setTodo('')
  }

  const markAsDoing = (index) => {
    const doingItem = todos[index]
    doingItem.status = 'Doing'
    setDoing([...doing, doingItem])
    setTodos(todos.filter((_, i) => i !== index))
  }

  const markAsDone = (index) => {
    const doneItem = doing[index]
    doneItem.status = 'Done'
    setDone([...done, doneItem])
    setDoing(doing.filter((_, i) => i !== index))
  }

  const deleteItem = (index) => {
    setDone(done.filter((_, i) => i !== index))
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
          To-Do List Using State
        </Typography>
        <Button
          variant="contained"
          color='secondary'
          sx={{ marginTop: 2 }}
          onClick={() => navigate('/redux')}
        >
          Todo List using Redux
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
          <TodoList todos={todos} markAsDoing={markAsDoing} />
        </Grid>
        <Grid item xs={3} paddingBottom={2}>
          <Typography align='center' variant='h4'>
            Doing
          </Typography>
          <DoingList doings={doing} markAsDone={markAsDone} />
        </Grid>
        <Grid item xs={3} paddingBottom={2}>
          <Typography align='center' variant='h4'>
            Done
          </Typography>
          <DoneList dones={done} deleteItem={deleteItem} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default StatePage
