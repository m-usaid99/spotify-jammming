/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { searchBarStyle, inputStyle } from '../../styles/SearchBarStyles';
import Spotify from '../../Spotify';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

const SearchBar = ({ onSearch }) => {
    const theme = useTheme();

    const [term, setTerm] = useState('');

    const handleSearch = useCallback(
        debounce(async (searchTerm) => {
            if (searchTerm) {
                const tracks = await Spotify.search(searchTerm);
                onSearch(tracks);
            }
            else {
                onSearch([]);
            }
        }, 300),
        []
    );

    useEffect(() => {
        handleSearch(term);
    }, [term, handleSearch]);

    const handleChange = (e) => {
        setTerm(e.target.value);
    }
    
    return (
        <div css={searchBarStyle}>
            <input 
                css={inputStyle(theme)} 
                type='text' 
                placeholder='Search for a song!' 
                value={term}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;