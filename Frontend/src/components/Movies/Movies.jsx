import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api-helpers/api-helpers'
import MovieItem from './MovieItem'

const Movies = () => {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies)).catch((err)=>console.log(err))
  },[])
  return (
    <Box margin={"auto"} display={"flex"} alignItems={"center"} flexDirection={'column'}>
      <Box display={"flex"} alignItems={"center"} marginTop={3}>
        <Typography variant="h3" color={"secondary"}>
          All movies
        </Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {movies &&
          movies.map((movie) => (
            <MovieItem
              id={movie._id}
              title={movie.title}
              description={movie.description}
              releaseDate={movie.releaseDate}
              posterUrl={movie.posterUrl}
            />
          ))}
      </Box>
    </Box>
  );
}

export default Movies