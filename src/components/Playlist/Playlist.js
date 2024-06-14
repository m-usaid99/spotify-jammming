/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { 
  playlistStyle, 
  saveButton, 
  playlistNameInput, 
  clearButton, 
  playlistNameContainer } from '../../styles/PlayListStyles';
import TrackList from '../TrackList/TrackList';

const Playlist = ({ playlistName, playlistTracks, onRemove, onNameChange }) => {
  const theme = useTheme();

  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  const handleClearName = () => {
    onNameChange('');
  };

  return (
    <div css={playlistStyle(theme)}>
      <div css={playlistNameContainer(theme)}>
        <input 
          css={playlistNameInput(theme)} 
          value={playlistName}
          onChange={handleNameChange}
          placeholder='Enter Playlist Name'
          />
        <button css={clearButton(theme)} onClick={handleClearName}>✖</button>
      </div>
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button css={saveButton(theme)}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;