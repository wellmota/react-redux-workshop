import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from "@mui/material"

function Home() {
  const navigate = useNavigate()
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      sx={{ backgroundColor: '#1382ED', minHeight: '100vh', color: 'white' }}
    >
      <Typography mt={2} variant='h3'>
        To-Do List App
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        mt={4}
      >
        <Button
          variant="contained"
          color='secondary'
          sx={{ marginTop: 2 }}
          onClick={() => navigate('/state')}
        >
          Todo List using State
        </Button>
        <Button
          variant="contained"
          color='secondary'
          sx={{ marginTop: 2 }}
          onClick={() => navigate('/redux')}
        >
          Todo List using Redux
        </Button>
      </Box>
    </Box>
  )
}

export default Home
