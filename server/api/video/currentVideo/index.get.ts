import { videoList, videoControler } from '../videoData'

export default defineEventHandler(async (event) => {
    console.log('server端的當前video',videoList[videoControler.current_video_index])
 return videoList[videoControler.current_video_index]
});