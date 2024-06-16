const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scopes = [
  'user-read-private',
  'playlist-modify-public',
  'playlist-modify-private'
];

let accessToken;
let expiresIn;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const storedToken = localStorage.getItem('spotify_access_token');
    const storedExpiration = localStorage.getItem('spotify_token_expiration');

    if (storedToken && new Date().getTime() < storedExpiration) {
      accessToken = storedToken;
      return accessToken;
    }

    const hashParams = window.location.hash.substring(1).split('&').reduce((acc, current) => {
      const [key, value] = current.split('=');
      acc[key] = value;
      return acc;
    }, {});

    accessToken = hashParams.access_token;
    expiresIn = hashParams.expires_in;

    if (accessToken) {
      const expirationTime = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem('spotify_access_token', accessToken);
      localStorage.setItem('spotify_token_expiration', expirationTime);

      window.setTimeout(() => {
        localStorage.removeItem('spotify_access_token');
        localStorage.removeItem('spotify_token_expiration');
        accessToken = null;
      }, expiresIn * 1000);

      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      console.log('Redirecting to Spotify login...');
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scopes.join('%20')}&redirect_uri=${redirectUri}`;
      window.location = authUrl;
    }
  },

  async search(term) {
    const token = Spotify.getAccessToken();
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 403) {
        throw new Error('Access forbidden: Please log in again.');
      }
      const jsonResponse = await response.json();
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        albumArt: track.album.images[0].url,
        uri: track.uri
      }));
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const token = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    let userId;

    return fetch('https://api.spotify.com/v1/me', { headers })
      .then(response => response.json())
      .then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ name })
        })
          .then(response => response.json())
          .then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
              method: 'POST',
              headers,
              body: JSON.stringify({ uris: trackUris })
            });
          });
      });
  }
};

export default Spotify;
