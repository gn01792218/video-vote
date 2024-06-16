import { videoList } from "./videoData";

export default defineEventHandler(async (event) => {
  return videoList;
});
