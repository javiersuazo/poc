import * as React from "react";
import Container from '@mui/material/Container';
import {
  StateMachineProvider,
  createStore,
} from 'little-state-machine';
import { Routes, Route } from "react-router-dom";
import Songs from "pages/songs";
import Song from "pages/song";

createStore({
  songs: [],
  artists: []
});

function App() {
  return (
    <StateMachineProvider>
      <Container maxWidth="sm">
        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<Song />} />
        </Routes>
      </Container>
    </StateMachineProvider>
  );
}

export default App;
