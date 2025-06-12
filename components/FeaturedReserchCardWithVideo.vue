<template>
  <div
    class="relative rounded-[15px] overflow-hidden font-[Lusitana] aspect-[16/9] w-full sm:w-[49%] lg:w-[31.5%] max-w-[900px]"
    :class="{ 'video-playing': isPlaying }">
    <video ref="videoRef" class="plyr-custom" :poster="thumbnail" playsinline crossorigin="anonymous">
      <source :src="videoUrl" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <!-- Play/Pause Button -->
    <div
      class="absolute top-[30px] right-[30px] cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
      style="width: 50px; height: 57px;" @click="toggleVideo" role="button" tabindex="0" aria-label="Play/Pause Video">
      <div class="w-full h-full absolute bg-white/50 rounded-2xl pointer-events-none"></div>
      <img class="size-6 absolute inset-0 m-auto pointer-events-none" style="opacity: 50%;"
        :src="isPlaying ? pauseIcon : playIcon" alt="Play/Pause" draggable="false" />
    </div>

    <!-- Bottom Overlay -->
    <div class="absolute bottom-0 w-full h-[110px] rounded-b-[15px]  flex items-center px-3"
      :style="{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }">
      <p class="w-full text-white leading-snug text-[15px] px-[10px]" style="font-family: 'IBM Plex Sans', sans-serif;">
        {{ overlayText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  videoUrl: String,
  thumbnail: String,
  overlayText: String,
})

const videoRef = ref(null)
const player = ref(null)
const isPlaying = ref(false)

const playIcon = '/assets/icons/play.png'
const pauseIcon = '/assets/icons/pause.png'

const toggleVideo = () => {
  if (!player.value) return
  if (player.value.playing) {
    player.value.pause()
  } else {
    player.value.play()
  }
}

onMounted(async () => {
  const PlyrModule = await import('plyr')
  const Plyr = PlyrModule.default
  await import('plyr/dist/plyr.css')

  if (videoRef.value) {
    player.value = new Plyr(videoRef.value, {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
      autoplay: false,
      clickToPlay: false,
      resetOnEnd: true,
    })

    player.value.on('play', () => {
      isPlaying.value = true
    })

    player.value.on('pause', () => {
      isPlaying.value = false
    })

    // On ready, ensure poster is visible
    player.value.on('ready', () => {
      isPlaying.value = false
    })
  }
})

onUnmounted(() => {
  if (player.value) player.value.destroy()
})
</script>

<style scoped>
/* Container */
.relative {
  position: relative;
}

.overflow-hidden {
  overflow: hidden;
}

/* Video wrapper rounding & aspect */
video.plyr-custom {
  position: relative !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: fit !important;
  /* fill height, allow distortion */
  border-radius: 15px !important;
  background-color: transparent !important;
  outline: none !important;
  border: none !important;
  z-index: 0;
}

/* Plyr wrapper */
.plyr {
  border-radius: 15px !important;
  overflow: hidden;
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
  position: relative;
  z-index: 0;
}

/* Controls styling */
.plyr__controls {
  border-radius: 0 0 15px 15px !important;
  transition: opacity 0.3s ease;
  z-index: 10;
}

/* Hide controls when paused */
.video-playing .plyr__controls,
.video-playing .plyr__tooltip,
.video-playing .plyr__time {
  opacity: 1 !important;
  pointer-events: auto !important;
}

:not(.video-playing) .plyr__controls,
:not(.video-playing) .plyr__tooltip,
:not(.video-playing) .plyr__time {
  opacity: 0 !important;
  pointer-events: none !important;
}

:not(.video-playing) .plyr__control.plyr__control--overlaid {
  display: none !important;
}

/* Poster visibility - show only when NOT playing */
video.plyr-custom::-webkit-media-controls {
  display: none !important;
}

/* The magic: poster is visible only when NOT playing */
video.plyr-custom {
  /* Show poster by default */
  background-size: cover;
}

.video-playing video.plyr-custom {
  /* Remove poster background when playing */
  background: transparent !important;
}

/* Play/Pause Button */
.absolute.top-\[30px\].right-\[30px\] {
  z-index: 20;
}

.absolute.top-\[30px\].right-\[30px\]>div {
  border-radius: 15px;
}

.absolute.top-\[30px\].right-\[30px\]:hover {
  transform: scale(1.05);
}

.absolute.top-\[30px\].right-\[30px\]:active {
  transform: scale(0.95);
}

.absolute.top-\[30px\].right-\[30px\]>img {
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
  z-index: 25;
}

/* Bottom overlay */
.absolute.bottom-0.w-full.h-\[110px\] {
  border-radius: 0 0 15px 15px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  z-index: 10;
}

.overlay-text {
  color: white;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 15px;
  line-height: 1.3;
  width: 100%;
  padding: 0 10px;
  margin: 0;
  user-select: none;
}
</style>
