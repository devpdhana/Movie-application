import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';

const Home = () => {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        getAllMovies().then((data)=>setMovies(data.movies)).catch(err=>console.log(err))
        console.log(movies)
    },[])
  return (
    <Box height={"100%"} width={"100%"} margin={"auto"} marginTop={5}>
      <Box width="80vw" height={"40vh"} margin={"auto"}>
        <img width={"100%"} height={"100%"}
          src="https://lehren.com/wp-content/uploads/2023/10/4-tamil-movies-to-release-in-theatres-this-friday.jpg"
          alt="img"
        />
      </Box>
      <Box margin={"auto"} padding={2}>
        <Typography color={"secondary"} variant='h4' textAlign={'center'}>Recently Released</Typography>
      </Box>
      <Box margin={"auto"} alignItems={'center'} width={"100%"} display={"flex"} flexWrap={'wrap'} justifyContent={'center'}>
        {movies.slice(0,4).map((movie,index)=><MovieItem 
        id={movie._id} 
        title={movie.title}
        description={movie.description}
        releaseDate = {movie.releaseDate}
        posterUrl={movie.posterUrl}
        key={index} />)}
      </Box>
      <Box display={'flex'} margin={"auto"} padding={2}>
        <Button color='secondary' variant='outlined' LinkComponent={Link} to={"movies"} sx={{ margin:"auto"}}>View all movies</Button>
      </Box>
    </Box>
  );
}

export default Home