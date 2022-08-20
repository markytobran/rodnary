import { describe, it, vi, expect } from 'vitest'
import { createServer } from '../../../utils/createServer'
import * as VideoService from '../video.service'
import { video } from './mock/video'

describe("GET '/api/video' route", async () => {
  //Create server
  const server = await createServer()
  await server.ready()

  //Mock get videos service
  const getVideosSpy = vi.spyOn(VideoService, 'getVideos')
  expect(getVideosSpy.getMockName()).toEqual('getVideos')

  it('calling the getVideo service return all videos', async () => {
    const videos = [video, video, video]
    getVideosSpy.mockResolvedValue(videos)
    const response = await server.inject({
      method: 'GET',
      url: '/api/video',
    })

    expect(response.json()).toEqual(videos)
    expect(response.statusCode).toEqual(200)
  })

  it('calling the getVideo service, but error occurs', async () => {
    getVideosSpy.mockRejectedValue('Oh no error')
    const response = await server.inject({
      method: 'GET',
      url: '/api/video',
    })

    expect(response.json()).toEqual({ message: 'Error getting videos' })
    expect(response.statusCode).toEqual(500)
  })
})
