"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function homeRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return {
      hello: 'world'
    };
  });
}

var _default = homeRoutes;
exports.default = _default;