import React, { useState } from 'react'
import {AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar} from '@mui/material'
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
const Header = () => {
    const movies = ['Singam','Sura','Vedhalam']
    const [value,setValue] = useState(0)
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Box width={"20%"}>
          <MovieFilterIcon />
        </Box>
        <Box width={"50%"} margin={"auto"}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={movies.map((option) => option)}
            renderInput={(params) => (
              <TextField {...params} label="Search movies" />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs indicatorColor='secondary' textColor='white' value={value} onChange={(e,val)=>setValue(val)}>
            <Tab label="Movies" />
            <Tab label="Admin" />
            <Tab label="User" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header