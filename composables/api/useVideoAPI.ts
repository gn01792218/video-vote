import useApiBase from "./useApiBase";
import type { Video } from "~/types/video";

export default () => {
  const { fetchApiBase } = useApiBase()
  //MyModel API
  async function getVideos() {
    const videos = await fetchApiBase("/api","get");
    return videos as Video[];
  }
  async function getCurrentVideo() {
    const video = await fetchApiBase("/api/video/currentVideo","get");
    return video as Video;
  }
   async function next() {
    const currentVideoIndex = await fetchApiBase("/api/video/next","post");
    return currentVideoIndex as Video;
  }
  
  return {
    //data
    //methods
    getCurrentVideo,
    next,
    getVideos
  };
};
