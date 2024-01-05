import React, { useEffect, useState } from 'react'
import {AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar} from '@mui/material'
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import {getAllMovies} from '../api-helpers/api-helpers'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminAction, userAction } from '../store';
const Header = () => {
  const dispatch = useDispatch()
  const isUserloggedIn = useSelector((state)=>state.user.isLoggedin)
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedin)
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = (isAdmin)=>{
    console.log("Function called")
    dispatch(isAdmin?adminAction.logout():userAction.logout())
  }
  return (
    <AppBar color="secondary" position="sticky">
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
              <TextField
                variant="standard"
                sx={{ input: { color: "white" } }}
                {...params}
                label="Search movies"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            sx={{ fontWeight: "90px" }}
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="movies" label="Movies" />
            {!isUserloggedIn && !isAdminLoggedIn && (
              <>
                <Tab label="Admin" LinkComponent={Link} to="admin" />
                <Tab label="Auth" LinkComponent={Link} to="auth" />{" "}
              </>
            )}
            {isUserloggedIn && (
              <>
                <Tab label="Profile" LinkComponent={Link} to="/user" />
                <Tab
                  onClick={() => 
                    handleLogout(false)
                  }
                  label="Logout"
                  LinkComponent={Link}
                  to="/"
                />
              </>
            )}
            {isAdminLoggedIn && (
              <>
                <Tab label="Profile" LinkComponent={Link} to="/admin" />
                <Tab label="Add Movie" LinkComponent={Link} to="/addmovie" />
                <Tab
                  onClick={() => 
                    handleLogout(true)
                  }
                  label="Logout"
                  LinkComponent={Link}
                  to="/"
                />
              </>
            )}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header