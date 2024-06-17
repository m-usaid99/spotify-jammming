/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { appStyle, appBodyStyle, overlayStyle, loginBoxStyle, headerStyle, loadingBoxStyle } from '../../styles/AppStyles';
import { logoutButtonStyle } from '../../styles/LoginStyles';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../Spotify';
import Login from '../Login/Login';

const App = () => {
  const theme = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [originalSearchResults, setOriginalSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const token = Spotify.getAccessToken();
      if (token) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error fetching token:', error);
      localStorage.removeItem('spotify_access_token');
      localStorage.removeItem('spotify_token_expiration');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_token_expiration');
    setIsLoggedIn(false);
  };

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
      setSearchResults(searchResults.filter(resultTrack => resultTrack.id !== track.id));
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
    const updatedSearchResults = [...searchResults, track];
    updatedSearchResults.sort((a, b) => {
      return originalSearchResults.findIndex(t => t.id === a.id) - originalSearchResults.findIndex(t => t.id === b.id);
    });
    setSearchResults(updatedSearchResults);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const handleSearch = (tracks) => {
    setOriginalSearchResults(tracks);
    const filteredTracks = tracks.filter(track => !playlistTracks.some(savedTrack => savedTrack.id === track.id));
    setSearchResults(filteredTracks);
  };

  const savePlaylist = () => {
    setIsLoading(true);
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    }).catch(error => {
      console.error('Error saving playlist:', error);
    }).finally(() => {
      setIsLoading(false);
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
      {isLoading && (
        <div css={overlayStyle(theme)}>
          <div css={loadingBoxStyle(theme)}>
            <p>Loading...</p>
          </div>
        </div>
      )}
      <header css={headerStyle(theme)}>
        <h1>Jammming</h1>
        {isLoggedIn && (
          <button css={logoutButtonStyle(theme)} onClick={handleLogout}>Log out</button>
        )}
      </header>
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
