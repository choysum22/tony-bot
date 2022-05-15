/* eslint-disable comma-dangle */
module.exports = {
  apps: [
    {
      name: "discord-bot",
      script: "./index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
