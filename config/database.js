module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      // settings: {
      //   client: 'sqlite',
      //   filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      // },
      settings: {
        client: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '123456',
        database: 'strapi-cms'
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
