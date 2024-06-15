/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { loginBoxContentStyle, loginButtonStyle } from '../../styles/LoginStyles';
import Spotify from '../../Spotify';

const Login = ({ onLogin }) => {
    const theme = useTheme();

    const handleLogin = () => {
        Spotify.getAccessToken();
        onLogin();
    };

    return (
        <div css={loginBoxContentStyle(theme)}>
            <p>Welcome to Jamming! Log in with Spotify to create and share your favorite playlists!</p>
            <button css={loginButtonStyle(theme)} onClick={handleLogin}>Log in with Spotify</button>
        </div>
    );
};

export default Login;