import { describe, it, vi, expect } from 'vitest'
import { createServer } from '../../../utils/createServer'
import * as VideoService from '../video.service'
import { video } from './mock/video'

describe("GET '/api/video' route", async () => {
  //Create server
  const server = await createServer()
  await server.ready()

  //Mock create video service
  const createVideoSpy = vi.spyOn(VideoService, 'createVideo')
  expect(createVideoSpy.getMockName()).toEqual('createVideo')
  createVideoSpy.mockResolvedValue(video)

  it('calling the createVideo service with the VALID API key and VALID body should return the video', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api/video',
      payload: video,
    })

    expect(createVideoSpy).toHaveBeenCalledWith(video)
    expect(response.json()).toEqual(video)
    expect(response.statusCode).toEqual(201)
  })
})
