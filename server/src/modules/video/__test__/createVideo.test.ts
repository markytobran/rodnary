import { describe, it, vi, expect } from 'vitest'
import { createServer } from '../../../utils/createServer'
import * as VideoService from '../video.service'
import { video } from './mock/video'

describe("POST '/api/todos' route", () => {
  it('should call the createVideo service', async () => {
    const createVideoSpy = vi.spyOn(VideoService, 'createVideo')

    expect(createVideoSpy.getMockName()).toEqual('createVideo')

    createVideoSpy.mockResolvedValue(video)

    const server = await createServer()

    await server.ready()

    const response = await server.inject({
      method: 'POST',
      url: '/api/video',
      payload: video,
    })

    expect(response.json()).toEqual(video)

    expect(createVideoSpy).toHaveBeenCalledWith(video)
  })
})
