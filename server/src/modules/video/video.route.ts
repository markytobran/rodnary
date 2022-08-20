import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { createVideoHandler, getVideosHandler, getTOPVideosHandler, getVideoHandler, getVideosByChannelIdHandler } from './video.controller'
import { createVideoSchema, getVideoParamsSchema, getChannelIDParamsSchema } from './video.schema'

export function videosRoute(app: FastifyInstance, options: FastifyPluginOptions, done: () => void) {
  app.get('/', getVideosHandler)
  app.post('/', { schema: createVideoSchema }, createVideoHandler) //check api key
  app.get('/:id', { schema: getVideoParamsSchema }, getVideoHandler)
  app.get('/topvideos/home', getTOPVideosHandler)
  app.get('/channel/:id', { schema: getChannelIDParamsSchema }, getVideosByChannelIdHandler)
  // router.get('/api/videos/channel/:id', validateResource(getVideoSchema), getVideosByChannelIdHandler)
  // router.get('/api/videos/category/:categoryKey/:value', getVideosByCategoryHandler)

  done()
}
