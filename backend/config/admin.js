module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '085d5fdef2a3b463426d4495924d3585'),
  },
});
