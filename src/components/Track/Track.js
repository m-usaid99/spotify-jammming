/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { buttonStyle, trackArtist, trackAlbum, trackContainer, trackDetails, trackName, albumArtStyle, audioStyle } from '../../styles/TrackStyles';

const Track = ({ track, onAdd, onRemove, isRemoval }) => {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAdd = () => {
    onAdd(track);
  };

  const handleRemove = () => {
    onRemove(track);
  };

  const togglePlay = () => {
    const audio = document.getElementById(`audio-${track.id}`);
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
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
      <audio id={`audio-${track.id}`} css={audioStyle(theme)} src={track.previewUrl}></audio>
      <button css={buttonStyle(theme)} onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      {isRemoval ? (
        <button css={buttonStyle(theme)} onClick={handleRemove}>Remove</button>
      ) : (
        <button css={buttonStyle(theme)} onClick={handleAdd}>Add</button>
      )}
    </li>
  );
};

export default Track;
