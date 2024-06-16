import { videoList, videoControler } from './video/videoData'

export default defineEventHandler(async (event) => {
   return videoList
});