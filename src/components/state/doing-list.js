import React from 'react'
import { Typography, IconButton, Tooltip } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { ItemContainer, ListContainer } from '../containers'

export const DoingList = ({ doings, markAsDone }) => {
  return (
    <ListContainer>
      {doings.length === 0 ? (
        <Typography variant='h6' align='center'>No tasks in progress</Typography>
      ) : (
        doings.map((doing, index) => (
          <ItemContainer backgroundColor='#6bc88d' >
            <Typography>{doing.text}</Typography>
            <Tooltip title='Mark as Done' placement='top'>
              <IconButton sx={{ color: 'black' }} onClick={() => markAsDone(index)}>
                <CheckCircle />
              </IconButton>
            </Tooltip>
          </ItemContainer>
        ))
      )}
    </ListContainer>
  )
}