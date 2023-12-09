import React, { useEffect, useState } from 'react'
import {AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar} from '@mui/material'
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import {getAllMovies} from '../api-helpers/api-helpers'
import { Link } from 'react-router-dom';
const Header = () => {
    const [movies,setMovies] = useState([])
    const [value,setValue] = useState(0)

    useEffect(()=>{
        getAllMovies().then(data=>setMovies(data.movies)).catch(err=>console.log(err))
    },[])
  return (
    <AppBar color="secondary" position='sticky'>
      <Toolbar>
        <Box width={"20%"}>
          <MovieFilterIcon />
        </Box>
        <Box width={"50%"} margin={"auto"}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField variant='standard' sx={{input:{color:"white"}}} {...params} label="Search movies" />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs indicatorColor='secondary' textColor='inherit'  sx={{fontWeight:"90px"}} value={value} onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={Link} to="movies" label="Movies" />
            <Tab label="Admin" LinkComponent={Link} to="admin" />
            <Tab label="Auth" LinkComponent={Link} to="auth"/>
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header