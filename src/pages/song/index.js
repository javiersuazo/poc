import React, { useMemo } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { useStateMachine } from 'little-state-machine';
import { useParams } from "react-router-dom";
import {
  SongContainer,
} from 'pages/song/styles';
import {
  convertMsToHM
} from 'lib/helpers';

function Song() {
  const { id } = useParams();
  const { 
    state: { songs, artists } 
  } = useStateMachine();
  
  const song = useMemo(() => 
    songs.find((song) => song.id === parseInt(id)), 
  // eslint-disable-next-line
  [id]);
  
  const artist = useMemo(() => 
    artists.find((artist) => artist.id === song.mainArtistId), 
    // eslint-disable-next-line
  [song]);

  return (
    <SongContainer>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="240"
          image="https://cdn.prod.www.spiegel.de/images/70f52a43-0001-0004-0000-000001299483_w1528_r1.0070873342478281_fpx54.6_fpy52.98.jpg"
          alt="album"
        />
        <CardContent>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignContent="center">
            <Typography gutterBottom variant="subtitle1">
              Id
            </Typography>          
            <Typography gutterBottom variant="subtitle2">
              {song.id}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignContent="center">
            <Typography gutterBottom variant="subtitle1">
             Title
            </Typography>          
            <Typography gutterBottom variant="subtitle2">
              {song.title}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignContent="center">
            <Typography gutterBottom variant="subtitle1">
              Genre
            </Typography>          
            <Typography gutterBottom variant="subtitle2">
              {song.genre}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignContent="center">
            <Typography gutterBottom variant="subtitle1">
              Duration
            </Typography>          
            <Typography gutterBottom variant="subtitle2">
              {convertMsToHM(song.duration)}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignContent="center">
            <Typography gutterBottom variant="subtitle1">
              Main Artist
            </Typography>          
            <Typography gutterBottom variant="subtitle2">
              {artist.name}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignContent="center">
            <Typography gutterBottom variant="subtitle1">
              Audio Language:
            </Typography>          
            <Typography gutterBottom variant="subtitle2">
              {song.audioLanguage}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </SongContainer>
  );
}

export default Song;
