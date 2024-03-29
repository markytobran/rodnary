import { FastifyReply, FastifyRequest } from 'fastify'
import mongoose from 'mongoose'
import { logger } from '../../utils/logger'
import { CreateVideoBody, GetVideoParams, GetChannelIDParams } from './video.schema'
import { createVideo, getVideos, getVideoByID } from './video.service'
import { SkipLimitQuery } from '../../types/interfaces'

export async function getVideosHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { skip, limit } = req.query as SkipLimitQuery
    const videos = await getVideos({}, Number(skip), Number(limit))
    return reply.code(200).send(videos)
  } catch (e) {
    logger.error(e, 'getVideosHandler: error getting videos')
    return reply.code(500).send({ message: 'Error getting videos' })
  }
}

export async function getVideoHandler(req: FastifyRequest<{ Params: GetVideoParams }>, reply: FastifyReply) {
  try {
    const id = req.params.id
    const isValid = mongoose.isValidObjectId(id)

    if (!isValid) {
      return reply.code(400).send({ message: 'Error video id is not valid' })
    }

    const video = await getVideoByID(id)

    if (!video) {
      return reply.code(404).send({ message: 'Error video not found' })
    }

    return reply.code(200).send(video)
  } catch (e) {
    logger.error(e, 'getVideoHandler: error getting video')
    return reply.code(500).send({ message: 'Error getting videos' })
  }
}

export async function createVideoHandler(req: FastifyRequest<{ Body: CreateVideoBody }>, reply: FastifyReply) {
  try {
    const video = await createVideo(req.body)
    return reply.code(201).send(video)
  } catch (e) {
    logger.error(e, 'createTodoHandler: error creating new video')
    return reply.code(500).send({ message: 'Error creating new video' })
  }
}

export async function getTOPVideosHandler(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { skip, limit } = req.query as SkipLimitQuery
    const naturalVideos = await getVideos({ venueType: 'natural' }, Number(skip), Number(limit))
    const commercialVideos = await getVideos({ venueType: 'commercial' }, Number(skip), Number(limit))

    return reply.code(200).send({ naturalVideos, commercialVideos })
  } catch (e) {
    logger.error(e, 'getTOPVideosHandler: error getting TOP videos')
    return reply.code(500).send({ message: 'Error getting TOP Videos for homepage' })
  }
}

export async function getVideosByChannelIdHandler(req: FastifyRequest<{ Params: GetChannelIDParams }>, reply: FastifyReply) {
  try {
    const channelID = req.params.id
    const { skip, limit } = req.query as SkipLimitQuery
    const videos = await getVideos({ channelID }, Number(skip), Number(limit))
    return reply.code(200).send(videos)
  } catch (e) {
    logger.error(e, 'getVideosByChannelIdHandler: error getting videos by channel ID')
    return reply.code(500).send({ message: 'Error getting videos by channel ID' })
  }
}
