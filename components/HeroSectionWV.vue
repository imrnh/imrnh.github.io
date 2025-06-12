<template>
    <div class="relative w-full aspect-video">
        <!-- Video Element -->
        <video ref="videoRef" class="w-full h-full object-cover rounded-[15px]" :poster="thumbnail">
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
                : 'absolute bottom-[67px] left-[76px] rounded-[15px] p-4 xl:p-6 w-[50%]',
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
import { ref, onMounted } from 'vue'

const props = defineProps({
    videoUrl: String,
    thumbnail: String,
    subtitle: String,
    title: String,
    description: String,
})

const videoRef = ref(null)
const isPlaying = ref(false)

const playIcon = '/assets/icons/5172579_play_video_icon.png'
const pauseIcon = '/assets/icons/pause_red.png'

function togglePlay() {
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

const isMobile = ref(false)

onMounted(() => {
    const update = () => {
        const width = window.innerWidth
        isMobile.value = width < 1024
    }
    window.addEventListener('resize', update)
    update()
})
</script>
  
