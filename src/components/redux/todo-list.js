import React from 'react'
import { Typography, IconButton, Tooltip } from '@mui/material'
import { ArrowCircleRight } from '@mui/icons-material'
import { ItemContainer, ListContainer } from '../containers'

export const TodoList = () => {
  const todos = []

  const markAsDoing = (index) => {
    console.log(index)
  }

  return (
    <ListContainer>
      {todos.length === 0 ? (
        <Typography variant='h6' align='center'>No tasks To-Do</Typography>
      ) : (
        todos.map((todo, index) => (
          <ItemContainer backgroundColor='#8ADBD6' >
            <Typography>{todo.text}</Typography>
            <Tooltip title='Mark as Doing' placement='top'>
              <IconButton sx={{ color: 'black' }} onClick={() => markAsDoing(index)}>
                <ArrowCircleRight />
              </IconButton>
            </Tooltip>
          </ItemContainer>
        ))
      )}
    </ListContainer>
  )
}