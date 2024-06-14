/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { buttonStyle, trackArtist, trackAlbum, trackContainer, trackDetails, trackName } from '../../styles/TrackStyles';

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
            <div css={trackDetails(theme)}>
                <span css={trackName(theme)}>{track.name}</span>
                <span css={trackArtist(theme)}>{track.artist}</span>
            </div>
            <span css={trackAlbum(theme)}>{track.album}</span>
            {isRemoval ? (
                <button css={buttonStyle(theme)} onClick={handleRemove}>Remove</button>
            ) : (
                <button css={buttonStyle(theme)} onClick={handleAdd}>Add</button>
            )}
        </li>
    );
};

export default Track;