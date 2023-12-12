import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const MovieItem = ({id, title, description, releaseDate,posterUrl}) => {
  return (
    <Card
      sx={{
        width: 250,
        height: 320,
        borderRadius: 4,
        ":hover": {
          boxShadow: "10px  20px #CCC",
        },
        margin: 5,
      }}
    >
      <img
        width={"100%"}
        height={"50%"}
        sx={{ height: "20%", width: "100%" }}
        src={posterUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' size="small"  sx={{ margin: "auto" }}>
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem