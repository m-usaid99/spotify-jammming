/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { appStyle, appBodyStyle, overlayStyle, loginBoxStyle } from '../../styles/AppStyles';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../Spotify';
import Login from '../Login/Login';
// login screen (button redirects to OAuth)
// figure out uri situation 

const App = () => {
  const theme = useTheme();
  
  // State for the playlist
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const token = Spotify.getAccessToken();
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
  };

  const handleSearch = (tracks) => {
    setSearchResults(tracks);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  return (
    <div css={appStyle(theme)}>
      {!isLoggedIn && (
        <div css={overlayStyle(theme)}>
          <div css={loginBoxStyle(theme)}>
            <Login onLogin={() => setIsLoggedIn(true)} />
          </div>
        </div>
      )}
      <h1>Spotify Jammming</h1>
      <SearchBar onSearch={handleSearch} />
      <div css={appBodyStyle(theme)}>
        <SearchResults tracks={searchResults} onAdd={addTrackToPlaylist} />
        <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
          onRemove={removeTrackFromPlaylist} 
          onNameChange={updatePlaylistName} 
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
};

export default App;