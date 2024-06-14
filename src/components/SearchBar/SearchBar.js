/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { searchBarContainer, searchInput, searchButton } from '../../styles/SearchBarStyles';
import Spotify from '../../Spotify';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const theme = useTheme();

    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const search = () => {
        Spotify.search(term).then(tracks => {
            onSearch(tracks);
        });
    };

    return (
        <div css={searchBarContainer(theme)}>
            <input 
                css={searchInput(theme)} 
                type='text' 
                placeholder='Search for a song!' 
                value={term}
                onChange={handleTermChange}
            />
            <button css={searchButton(theme)} onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;