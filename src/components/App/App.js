/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { appStyle, appBodyStyle } from '../../styles/AppStyles';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useState } from 'react';

function App() {
  const theme = useTheme();

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const handleSearch = (tracks) => {
    setSearchResults(tracks);
  }

  return (
    <div css={appStyle(theme)}>
      <h1>Spotify Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <div css={appBodyStyle(theme)}>
        <SearchResults tracks={searchResults} onAdd={addTrackToPlaylist}/>
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrackFromPlaylist}
          onNameChange={updatePlaylistName}
          /> 
      </div>
    </div>
  );
}

export default App;
