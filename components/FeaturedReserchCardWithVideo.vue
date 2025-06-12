<template>
  <div
    class="relative rounded-[15px] overflow-hidden font-[Lusitana] aspect-[16/9] w-full sm:w-[49%] lg:w-[31.5%] max-w-[900px]">
    <video ref="videoRef" class="w-full h-full object-cover object-center rounded-[15px]" :poster="thumbnail">
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <!-- Play/Pause Button (updated) -->
    <div
      class="absolute top-[30px] right-[30px] cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
      style="width: 50px; height: 57px;" @click="toggleVideo">
      <div class="w-full h-full absolute bg-white/50 rounded-2xl"></div>
      <img class="size-6 absolute inset-0 m-auto pointer-events-none" style="opacity: 50%;"
        :src="isPlaying ? pauseIcon : playIcon" alt="Play/Pause" />
    </div>

    <!-- Bottom Overlay -->
    <div class="absolute bottom-0 w-full h-[110px] rounded-b-[15px] flex items-center px-3"
      :style="{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }">
      <p class="w-full text-white leading-snug text-[15px] px-[10px]" style="font-family: 'IBM Plex Sans', sans-serif;">
        {{ overlayText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  videoUrl: String,
  thumbnail: String,
  overlayText: String,
})

const videoRef = ref(null)
const isPlaying = ref(false)

const playIcon = '/assets/icons/play.png'
const pauseIcon = '/assets/icons/pause.png'

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
