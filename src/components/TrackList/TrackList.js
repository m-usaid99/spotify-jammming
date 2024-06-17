/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { trackListStyle } from '../../styles/TrackListStyles';
import Track from '../Track/Track';

const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
  const theme = useTheme();
  return (
    <ul css={trackListStyle(theme)}>
      {tracks.map(track => (
        <Track 
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        /> 
      ))}
    </ul>
  );
};

export default TrackList;
