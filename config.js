require('dotenv').config();
module.exports = {
  port: process.env.PORT || 3002,
  baseUrl: process.env.BASE_URL || "http://etda-idp.wisered.com",
  version: "0.1.0",
  serverKey: 'server.key',
  scope: ['openid', 'profile_kyc', 'profile'],
  auth: {
    db: 'local',
    twoFactor: false,
  },
  ldap: {
    url: '',
    baseDN: '',
    filter: '',
  },
  mode: 'test',
}
