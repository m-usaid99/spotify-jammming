/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { searchResultsStyle } from '../../styles/SearchResultsStyles';
import TrackList from '../TrackList/TrackList';

const SearchResults = ({ tracks, onAdd }) => {
  const theme = useTheme();
  return (
    <div css={searchResultsStyle(theme)}>
      <h2>Search Results</h2>
      <TrackList tracks={tracks} onAdd={onAdd} isRemoval={false}/>
    </div>
  );
};

export default SearchResults;