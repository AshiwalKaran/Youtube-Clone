import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
    <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
    </Box>
    <Sidebar/>
    <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
      Copyright 2022 Media
    </Typography>
    </Stack>
  )
}

export default Feed