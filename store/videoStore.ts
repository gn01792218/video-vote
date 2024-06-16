import { defineStore } from 'pinia';
// 使用composition API模式定义store
interface State{
  videoList:string[],
  currentVIdeoIndex:number
}
export const useVideoStore = defineStore('videoStore', () => {
  // 初始状态
  const initState:State = {
    videoList: ['https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_01.mp4','https://www.ebrainzone.com/JTI/240611_JTI_Acopy_V3_D_02.mp4'],
    currentVIdeoIndex:0
  };

  //state
  const videoList = ref<string[]>(initState.videoList);
  const currentVideoIndex = ref<number>(initState.currentVIdeoIndex)

  //gatters
  const currentVideoUrl = computed(() => videoList.value[currentVideoIndex.value]);

  //actions
  function setVideoList(payload:string[]) {
    videoList.value = payload
  }


  return { videoList, currentVideoIndex, currentVideoUrl, setVideoList };
});
export default useVideoStore