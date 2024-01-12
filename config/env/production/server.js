module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://cartoon-tag.onrender.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '192c1dd3cc7bb069706ee4a8f0199ca6'),
    },
    path: '/admin',
    build: {
      backend: env('ADMIN_BUILD_BACKEND', 'https://cartoon-tag.onrender.com/admin'),
    },
    autoopen: false,


  },
});
