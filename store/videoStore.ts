import { defineStore } from 'pinia';
import type { Video } from '~/types/video';
// 使用composition API模式定义store
interface State{
  videoList:Video[],
  currentVIdeoIndex:number
}
export const useVideoStore = defineStore('videoStore', () => {
  // 初始状态
  const initState:State = {
    videoList: [],
    currentVIdeoIndex:0
  };

  //state
  const videoList = ref<Video[]>(initState.videoList);
  const currentVideoIndex = ref<number>(initState.currentVIdeoIndex)

  //gatters
  const currentVideoUrl = computed<string>(() => {
    if(videoList.value) return videoList.value[currentVideoIndex.value]?.url
    else return ''
  })

  //actions
  function setVideoList(payload:Video[]) {
    videoList.value = payload
  }
  function incresCurrentVideoIndex() {
    currentVideoIndex.value++
  }


  return { 
    //data
    videoList, 
    currentVideoIndex, 
    currentVideoUrl, 
    //methods
    setVideoList,
    incresCurrentVideoIndex
  };
});
export default useVideoStore