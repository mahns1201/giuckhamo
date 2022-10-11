import { login, signUp } from '../controllers/adminController';
import Admin from '../models/admin.js';
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */

const PRE_FIX = '/admin';
async function adminRouter(fastify, options) {
  fastify.post(`${PRE_FIX}/sign-up`, async (request, reply) => {
    const { body } = request;
    const result = await signUp(body);

    return result;
  });

  fastify.post(`${PRE_FIX}/login`, async (request, reply) => {
    const { body } = request;
    const result = await login(JSON.parse(body));

    return result;
  });
}

export default adminRouter;
