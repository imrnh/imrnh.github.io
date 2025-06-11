<template>
    <div class="relative w-[833px] h-[520px] rounded-[15px] overflow-hidden font-[Lusitana]">
        <video ref="videoRef" class="w-full h-full object-cover rounded-[15px]"
            poster="/assets/images/pexels-googledeepmind-17483867.jpg">
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>

        <!-- Play/Pause Button -->
        <button @click="toggleVideo" class="absolute top-[30px] right-[30px] bg-white/70 px-4 py-2 rounded text-lg"
            style="opacity: 0.5;">
            {{ isPlaying ? '⏸' : '▶️' }}
        </button>

        <!-- Bottom Overlay -->
        <div class="absolute bottom-0 w-full h-[110px] rounded-b-[15px] flex items-center px-6"
            :style="{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }">
            <p class="w-full text-black text-[20px] leading-snug"
                style="font-family: ' IBM Plex Sans', sans-serif; font-size: 18px; padding-left: 35px; padding-right: 35px;">
                Extensive experimental results demonstrate that expressive instructions are crucial to instruction-based
                image editing, and our MGIE can lead to a notable improvement.
            </p>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const videoRef = ref(null)
const isPlaying = ref(false)

const toggleVideo = () => {
    const video = videoRef.value
    if (!video) return

    if (video.paused) {
        video.play()
        isPlaying.value = true
    } else {
        video.pause()
        isPlaying.value = false
    }
}
</script>

<style scoped>
/* If Lusitana isn't already included via Google Fonts or a stylesheet, add it globally in app.vue or layout */
</style>
  
