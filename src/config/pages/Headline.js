import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Headline() {
  const [headlineNew, setHeadlineNew] = useState({})
  const location = useLocation()
  useEffect(()=>{
    setHeadlineNew(location.state)
    console.log(location.state)
  },[])
  return (
    <>
    <Box>
      <Box>
        <img src={headlineNew.urlToImage} width="100%" />
        <Typography variant='h2'>{headlineNew.title}</Typography>
        <Typography variant='h3'>{headlineNew.description}</Typography>
          <Typography variant='h5' mt={3}>Published At: {headlineNew.publishedAt}</Typography>
      </Box>
    </Box>
    
    </>
  )
}
