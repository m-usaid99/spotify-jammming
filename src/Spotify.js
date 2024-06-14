const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;


const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private',
];

let accessToken;
let expiresIn;

const Spotify = {
    getAccessToken() {
        // check if an access token already exists
        const storedToken = localStorage.getItem('spotify_access_token');
        const storedExpiration = localStorage.getItem('spotify_token_expiration');

        if (storedToken && new Date().getTime() < storedExpiration) {
            return storedToken;
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

            // clear url params
            window.setTimeout(() => {
                localStorage.removeItem('spotify_access_token');
                localStorage.removeItem('spotify_token_expiration');
                accessToken = null;
            }, expiresIn * 1000);

            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
        else {
            const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scopes.join('%20')}&redirect_uri=${redirectUri}`;
            window.location = authUrl;
        }
    },



    search(term) {
        const token = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    }

};

export default Spotify;