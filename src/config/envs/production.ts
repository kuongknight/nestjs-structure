export default {
  apiPrefix: '/api/v1',
  database: {
    host: 'db',
    port: 5432,
    username: 'faktoora',
    password: process.env.DB_PASSWORD, // Set by pipeline variables of gitlab-ci
    dbname: 'faktoora',
  },
  redis: {
    host: 'redis',
    password: process.env.REDIS_PASSWORD, // Set by pipeline variables of gitlab-ci
  },
};
