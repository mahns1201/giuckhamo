"use strict";

var _fastify = _interopRequireDefault(require("fastify"));

var _cors = _interopRequireDefault(require("@fastify/cors"));

var _home = _interopRequireDefault(require("./routers/home.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const app = (0, _fastify.default)({
  logger: true
});
app.register(_cors.default, {
  origin: '*'
});
app.register(_home.default);
app.listen({
  port: 5000
}, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  } // Server is now listening on ${address}

});