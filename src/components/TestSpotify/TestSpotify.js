/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import Spotify from '../../Spotify';

const TestSpotify = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const accessToken = Spotify.getAccessToken();
    setToken(accessToken);
  }, []);

  return (
    <div>
      <h2>Spotify Access Token Test</h2>
      {token ? (
        <p>Access Token: {token}</p>
      ) : (
        <p>No access token found. Please log in to Spotify.</p>
      )}
    </div>
  );
};

export default TestSpotify;