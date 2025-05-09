export default {
  port: 4002,

  url: {
    scheme: 'http',
    host: 'core.com',
    api: 'core.com',
  },

  mongo: {
    uri: `mongodb://localhost:27017/pide`,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
    },
  },

  resourceUrl: 'http://core.com',

  winstonConsole: false,

  // seedDB: true,
};
