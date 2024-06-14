/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { playlistStyle, saveButton, playlistNameInput } from '../../styles/PlayListStyles';
import TrackList from '../TrackList/TrackList';

const Playlist = ({ playlistName, playlistTracks, onRemove, onNameChange }) => {
  const theme = useTheme();

  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  }

  return (
    <div css={playlistStyle(theme)}>
      <input 
        css={playlistNameInput(theme)} 
        value={playlistName}
        onChange={handleNameChange}
      />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true}/>
      <button css={saveButton(theme)}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;