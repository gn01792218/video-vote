import { videoList, videoControler } from './videoData'

export default defineEventHandler(async (event) => {
   videoControler.current_video_index++
   return 
});