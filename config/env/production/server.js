module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8081),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '192c1dd3cc7bb069706ee4a8f0199ca6'),
    },
  },
});
