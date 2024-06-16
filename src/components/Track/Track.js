/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { buttonStyle, trackArtist, trackAlbum, trackContainer, trackDetails, trackName, albumArtStyle } from '../../styles/TrackStyles';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const theme = useTheme();

  const handleAdd = () => {
    onAdd(track);
  };

  const handleRemove = () => {
    onRemove(track);
  };

  return (
    <li css={trackContainer(theme)}>
      <img css={albumArtStyle(theme)} src={track.albumArt} alt={`${track.name} album art`} />
      <div css={trackDetails(theme)}>
        <span css={trackName(theme)}>{track.name}</span>
        <div>
          <span css={trackArtist(theme)}>{track.artist}</span>
          <span css={trackAlbum(theme)}>{track.album}</span>
        </div>
      </div>
      {isRemoval ? (
        <button css={buttonStyle(theme)} onClick={handleRemove}>Remove</button>
      ) : (
        <button css={buttonStyle(theme)} onClick={handleAdd}>Add</button>
      )}
    </li>
  );
};

export default Track;
