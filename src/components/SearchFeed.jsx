import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import {Sidebar,Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const SearchFeed = () => {

  const [videos,setVideos]=useState([]);
  const {searchTerm}=useParams();

  useEffect(()=>{
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm]);


  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
       Result for : <span style={{color:'#F31503'}}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
    
  )
}

export default SearchFeed;