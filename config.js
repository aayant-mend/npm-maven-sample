module.exports = {
  platform: 'azure',
  endpoint: 'https://dev.azure.com/aayantmend/',
  token: process.env.TOKEN,
  hostRules: [
    {
      hostType: 'npm',
      matchHost: 'pkgs.dev.azure.com',
      username: 'apikey',
      password: process.env.TOKEN,
    },
  ],
  repositories: ['NPM-Renovate/NPM-Renovate'],
};
