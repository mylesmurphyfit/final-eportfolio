module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      skipMD5: true,
    },
    instance: {
      dbName: 'eportfolio_jest',
    },
    autoStart: false,
  },
  mongoURLEnvName: 'MONGODB_URI',
};
