export async function getSpotifyToken() {
    const axios = require("axios");
    const qs = require("qs");

    const client_id = '8285b1359edb48729aa1013f345f0ffa';
    const client_secret = '2bfa527b2b5948f3a92b20d27677bd2a';

    const headers = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
            username: client_id,
            password: client_secret,
        },
        
        };
        const data = {
        grant_type: "client_credentials",
        };
    const authResponse = await axios.post('https://accounts.spotify.com/api/token',  qs.stringify(data), headers);
    const token = authResponse.data.access_token;

    return token;
};
