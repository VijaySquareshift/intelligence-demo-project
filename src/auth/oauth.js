// OAuth 2.0 Authentication Implementation
const oauth2 = require('simple-oauth2');

const credentials = {
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET
  },
  auth: {
    tokenHost: 'https://oauth.example.com',
    authorizePath: '/oauth/authorize',
    tokenPath: '/oauth/token'
  }
};

const oauth2Client = oauth2.create(credentials);

module.exports = { oauth2Client };
