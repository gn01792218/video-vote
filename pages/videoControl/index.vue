<template>
    <section class="w-[50%] text-white mx-auto">
        <p>當前video - {{ currentVideoIndex }}</p>
       <button @click="incresCurrentVideoIndex()">撥放下一關</button> 
       <button @click="">開始投票</button>
    </section>
</template>

<script setup lang="ts">
import useVideoStore from '~/store/videoStore';
const { currentVideoIndex } = storeToRefs(useVideoStore())
const { incresCurrentVideoIndex} = useVideoStore()
</script>