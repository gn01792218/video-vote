<template>
    <section class="w-[88%] relative mx-auto">
        <video class="w-full " controls :src="currentVideoUrl">
        </video>
        <div class="w-[80%] absolute bottom-1/4 left-1/2 translate-x-[-50%] flex justify-between">
            <div class="bg-red-500/40 text-3xl p-1 text-center">
                <p>A</p>
                <p>25人</p>
            </div>
            <div class="bg-blue-500/40 text-3xl p-1 text-center">
                <p>B</p>
                <p>18人</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import useVideoStore from '~/store/videoStore';

const { currentVideoUrl } = useVideoStore()

</script>