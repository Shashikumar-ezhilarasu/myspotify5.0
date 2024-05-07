import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import TopTracks from '../TopTracks';
const Login = () => {
  const [accessToken, setAccessToken] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      getToken(code);
    }
  }, []);

  const getToken = async (code) => {
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:3000/callback',
        client_id: '024ae176a1ba48738fe7717211279b06',
        client_secret: 'd5a784767d6245778f00c6d0df71f6e0',
      });
      const accessToken = response.data.access_token;
      setAccessToken(accessToken);
      // Set redirectToHome to true to trigger redirection
      setRedirectToHome(true);
    } catch (error) {
      console.error('Error getting token:', error);
    }
  };

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-private%20user-read-email`;
  };

  // Redirect to the home page if redirectToHome is true
  if (redirectToHome) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Login with Spotify</h2>
      <button onClick={handleLogin}>Login</button>

      <TopTracks />
    </div>
  );
};

export default Login;
