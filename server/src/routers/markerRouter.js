import { getMarkers, insertMarker } from '../controllers/markerController';
import Marker from '../models/marker';
/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function markerRoutes(fastify, options) {
  fastify.get('/marker', async (request, reply) => {
    const result = await Marker.find({});
   
    return result;
  });

  // admin
  // fastify.post('/marker', async (request, reply) => {
  //   console.log('exec post');
  //   const { body } = request;
  //   await insertMarker(body);
  //   // console.log(request.body);
  //   return { post: 'marker' };
  // });
}

export default markerRoutes;
