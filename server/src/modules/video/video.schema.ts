import { Static, Type } from '@sinclair/typebox'

const video = Type.Object({
  _id: Type.String(),
  title: Type.String(),
  channelTitle: Type.String(),
  channelId: Type.String(),
  description: Type.String(),
  logoURL: Type.String(),
  videoID: Type.String(),
  venueType: Type.String(),
  waterType: Type.String(),
  fishingType: Type.String(),
  subFishingType: Type.String(),
  publishedAt: Type.String(),
  videoLanguage: Type.String(),
  subtitles: Type.Array(Type.String()),
  likes: Type.Number(),
  thumbnails: Type.Array(Type.Object({ name: Type.String(), url: Type.String() })),
  socialLinks: Type.Array(Type.Object({ name: Type.String(), url: Type.String() })),
  coverImgLink: Type.String(),
})

const params = Type.Object({
  id: Type.String(),
})

export const createVideoSchema = {
  description: 'Create a new fishing video',
  body: Type.Omit(video, ['_id']),
  response: {
    201: video,
  },
}

export const getVideoParamsSchema = {
  description: 'Get a fishing video by id',
  params,
  response: {
    200: video,
  },
}

export const getChannelIDParamsSchema = {
  description: 'Get fishing videos by channel id',
  params,
  response: {
    200: Type.Array(video),
  },
}

export type CreateVideoBody = Static<typeof createVideoSchema.body>
export type GetVideoParams = Static<typeof getVideoParamsSchema.params>
export type GetChannelIDParams = Static<typeof getChannelIDParamsSchema.params>
