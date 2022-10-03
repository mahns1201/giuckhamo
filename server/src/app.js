import fastify from 'fastify';
import cors from '@fastify/cors';

import homeRoutes from './routers/homeRouter.js';
import './db';
/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const app = fastify({
  logger: true,
});

app.register(cors, { origin: '*' });
app.register(homeRoutes);

app.listen(
  { port: process.env.PORT || 5000, host: process.env.HOST || '127.0.0.1' },
  function (err, address) {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    // Server is now listening on ${address}
  },
);
