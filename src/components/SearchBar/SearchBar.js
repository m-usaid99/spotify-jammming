/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { searchBarContainer, searchInput, searchButton } from '../../styles/SearchBarStyles';

const SearchBar = () => {
    const theme = useTheme();

    return (
        <div css={searchBarContainer(theme)}>
            <input css={searchInput(theme)} type='text' placeholder='Search for a song!' />
            <button css={searchButton(theme)}>Search</button>
        </div>
    );
};

export default SearchBar;