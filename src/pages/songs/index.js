import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
  CircularProgress,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { useStateMachine } from 'little-state-machine';
import { getSongs, getArtistsByIds } from 'lib/api'
import { SongsContainer } from 'pages/songs/styles';

import { updateSongs, updateArtists } from 'store/actions';

function Songs() {
  const [ready, setReady] = useState(false);
  const {  actions , state: { songs, artists }  } = useStateMachine({ updateSongs, updateArtists });

  useEffect(() => {
    const loadSongsInformation = async() => {
      const songsFromService = await getSongs();
      const artistFromService = await getArtistsByIds(songsFromService.map((song) => song.mainArtistId));
      actions.updateSongs({ songs: songsFromService });
      actions.updateArtists({ artists: artistFromService });
      setReady(true);
    };
    loadSongsInformation();
  // eslint-disable-next-line
  }, []);
  
  if (!ready) {
    return <SongsContainer py={10} px={2}>
    <CircularProgress />
    </SongsContainer> 
  }

  return (
    <SongsContainer py={3} px={2}>
      <Typography variant="h4" gutterBottom>
        List of Songs
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Main Artist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(songs).map((song) => (
              <TableRow
                key={song.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {song.id}
                </TableCell>
                <TableCell align="left"><Link to={`/songs/${song.id}`}>{song.title}</Link></TableCell>
                <TableCell align="left">{ artists.find((artist) => artist.id === song.mainArtistId).name }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SongsContainer>
  );
}

export default Songs;
