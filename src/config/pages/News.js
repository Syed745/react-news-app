import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function News() {
  const navigate = useNavigate()
  const [articles, setArticles] = useState([])
  const getNews = () => {
    let newsApi =
      "https://newsapi.org/v2/everything?q=tesla&from=2022-05-02&sortBy=publishedAt&apiKey=0116b67d295d4a57be53e32f0d0c1989"
    axios.get(newsApi).then((success) => {
      console.log(success)
      setArticles(success.data.articles)
    })
      .catch((error) => {
        console.log(error)


      })
  }
  const clickToLink = (rec) => {
    navigate('/headline', {
      state: rec,
    })
    console.log(rec)

  }



  useEffect(() => {
    getNews()
  }, [])

  return (

    <Box className='text-start'  >
      <Typography variant='h4' className='text-center bg-dark text-light'>News</Typography>
      {articles.map((e, i) => (
        <Box className='shadow-lg p-3 mb-5 bg-light rounded' onClick={()=>clickToLink(e)} >
          <Box className="d-flex justify-content-start py-3 " elevation={4}>
            <img src={e.urlToImage} width="200px" />
            <Typography key={i} variant='h5'>{e.title}</Typography>

          </Box>
          <Typography>{e.description}</Typography>
          <Typography variant='caption' mt={3}>Published At: {e.publishedAt}</Typography>
        </Box>
      )

      )}
    </Box>

  )
}
