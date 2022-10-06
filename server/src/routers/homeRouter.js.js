import { getMarkers, insertMarker } from '../controllers/markerController';

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function homeRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    // console.log('start homeRoute', request);
    // const markers = await getMarkers();
    // console.log(markers);
    // return markers;

    return { hello: 'world' };
  });

  // fastify.post('/', async (request, reply) => {
  //   console.log('exec post');
  //   const { body } = request;
  //   await insertMarker(body);
  //   // console.log(request.body);
  //   return { hello: 'world' };
  // });
}

export default homeRoutes;
