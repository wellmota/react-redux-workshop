import React from 'react'
import { Box } from '@mui/material'

export const ListContainer = ({ children }) => {
  return (
    <Box
      sx={{
        border: '2px solid black',
        borderRadius: '16px',
        padding: '10px',
        backgroundColor: '#0F5596',
        marginTop: '10px',
      }}
    >
      {children}
    </Box>
  )
}

export const ItemContainer = ({ backgroundColor, children }) => {
  return (
    <Box
      mt={2}
      padding={4}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        backgroundColor: backgroundColor,
        color: 'black',
        borderRadius: 4,
        wordBreak: 'break-all'
      }}
    >
      {children}
    </Box>
  )
}