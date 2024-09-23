import React from 'react'
import { Typography, IconButton, Tooltip } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { ItemContainer, ListContainer } from '../containers'

export const DoneList = ({ dones, deleteItem }) => {
  return (
    <ListContainer>
      {dones.length === 0 ? (
        <Typography variant='h6' align='center'>No tasks done</Typography>
      ) : (
        dones.map((done, index) => (
          <ItemContainer backgroundColor='#4BB543'>
            <Typography>{done.text}</Typography>
            <Tooltip title='Remove from List' placement='top'>
              <IconButton sx={{ color: 'black' }} onClick={() => deleteItem(index)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </ItemContainer>
        ))
      )}
    </ListContainer>
  )
}