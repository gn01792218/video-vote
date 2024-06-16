<template>
    <section class="w-[50%] text-white mx-auto">
        <p>當前影片 {{ currentVideoIndex }}</p>
        <p>投票</p>
        <div class="flex justify-around max-w-[300px]">
            <p>A</p>
            <p>/</p>
            <p>B</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import useVideoStore from "~/store/videoStore"

const {
    currentVideoIndex,
    currentVideoUrl,
} = storeToRefs(useVideoStore())

</script>