<template>
    <div class="relative w-full aspect-video transition-opacity duration-300"
    style="border: none !important;"
        :class="{ 'opacity-0 pointer-events-none': !plyrReady }">
        <!-- Video Element -->
        <video ref="videoRef" class="w-full h-full object-cover rounded-[15px] plyr-custom" :poster="thumbnail"
            playsinline style="border-radius: 15px;">
            <source :src="videoUrl" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <!-- Play Button -->
        <div class="absolute top-[30px] right-[30px] cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
            style="width: 50px; height: 57px;" @click="togglePlay">
            <div class="w-full h-full absolute bg-white/50 rounded-2xl"></div>
            <img class="size-6 absolute inset-0 m-auto pointer-events-none" style="opacity: 50%;"
                :src="isPlaying ? pauseIcon : playIcon" alt="Play/Pause" />
        </div>

        <!-- Overlay Info Box -->
        <div v-show="!(isPlaying && !isMobile)" class="transition-all duration-300" :class="[
            isMobile
                ? 'relative mt-4 w-full rounded-none'
                : 'absolute bottom-[60px] left-[70px] rounded-[15px] p-4 xl:p-6 w-[47%]',
            !isMobile ? 'bg-white/65' : '',
        ]">
            <h3 class="font-bold"
                :class="isMobile ? 'mt-4 mb-2 mx-4' : 'mt-[15px] xl:mt-[30px] mx-[15px] xl:mx-[23px] mb-[5px]'"
                style="font-family: 'Inter', sans-serif; font-weight: 400; font-size: clamp(13px, 1.2vw, 15px);">
                {{ subtitle }}
            </h3>

            <h1 class="font-semibold"
                :class="isMobile ? 'mt-0 mb-4 mx-4' : 'mt-[5px] xl:mt-[10px] mx-[15px] xl:mx-[23px] mb-[20px] xl:mb-[35px]'"
                style="font-family: 'Lusitana', serif; font-weight: 700; line-height: 1.3; font-size: clamp(24px, 3vw, 32px);">
                {{ title }}
            </h1>

            <h3 class="text-gray-700" :class="isMobile ? 'mb-6 mx-4' : 'mb-[20px] xl:mb-[30px] mx-[15px] xl:mx-[23px]'"
                style="font-family: 'Lusitana', sans-serif; font-weight: 400; color: #282222; font-size: clamp(14px, 1.5vw, 18px);">
                {{ description }}
            </h3>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    videoUrl: String,
    thumbnail: String,
    subtitle: String,
    title: String,
    description: String,
})

const videoRef = ref(null)
const player = ref(null)
const isPlaying = ref(false)
const plyrReady = ref(false) // <-- flag for container visibility

const playIcon = '/assets/icons/5172579_play_video_icon.png'
const pauseIcon = '/assets/icons/pause_red.png'

function togglePlay() {
    if (!player.value) return
    if (player.value.playing) {
        player.value.pause()
    } else {
        player.value.play()
    }
}

const isMobile = ref(false)

onMounted(async () => {
    // Dynamic import to avoid SSR issues
    const PlyrModule = await import('plyr')
    const Plyr = PlyrModule.default
    await import('plyr/dist/plyr.css')

    if (videoRef.value) {
        player.value = new Plyr(videoRef.value, {
            controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
            autoplay: false,
            clickToPlay: false,
        })

        // Show container only after Plyr initialized
        plyrReady.value = true

        // Hide controls initially
        videoRef.value.closest('.plyr').classList.add('hide-controls')

        player.value.on('play', () => {
            isPlaying.value = true
            videoRef.value.closest('.plyr').classList.remove('hide-controls')
        })

        player.value.on('pause', () => {
            isPlaying.value = false
            videoRef.value.closest('.plyr').classList.add('hide-controls')
        })
    }

    const update = () => {
        isMobile.value = window.innerWidth < 1024
    }
    window.addEventListener('resize', update)
    update()
})

onUnmounted(() => {
    if (player.value) {
        player.value.destroy()
    }
})
</script>

<style>
/* Remove any default borders, outlines, shadows, backgrounds */
video {
    border: none !important;
    border-radius: 15px;
    outline: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
}

.plyr {
    border-radius: 15px !important;
    overflow: hidden;
    border: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
    transition: border 0.3s ease;
}

.plyr__controls {
    border-radius: 0 0 15px 15px !important;
}

/* Hide controls completely when paused */
.plyr.hide-controls .plyr__controls,
.plyr.hide-controls .plyr__tooltip,
.plyr.hide-controls .plyr__time {
    opacity: 0 !important;
    pointer-events: none !important;
    transition: opacity 0.3s ease;
}

/* Hide big overlay play button of Plyr */
.plyr.hide-controls .plyr__control.plyr__control--overlaid {
    display: none !important;
}

.plyr__poster{
    border: none !important;
    display: none;
}

.plyr__video-wrapper{
    border: none !important;
    outline: none !important;
}
</style>
  
