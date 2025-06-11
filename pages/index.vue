<template>
    <div class="container mx-auto px-[2.39%] relative mt-10">
        <!-- Responsive Video Wrapper -->
        <div class="relative w-full aspect-video">
            <video ref="videoRef" class="w-full h-full object-cover rounded-[15px]"
                poster="/assets/images/video_thumbnail.jpg">
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <!-- Play Button (top-right corner) -->
            <button
                class="absolute top-[35px] right-[35px] bg-white bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-75"
                style="opacity: 0.5;"
                @click="togglePlay">
                {{ isPlaying ? '⏸️' : '▶️' }}
            </button>


            <!-- Bottom-left overlay box -->
            <div class="absolute bottom-[67px] left-[76px] w-[615px] h-[350px] bg-white bg-opacity-65 p-6 flex flex-col justify-between rounded-[15px]"
                style="background-color: rgba(255, 255, 255, 0.65);">

                <!-- About myself -->

                <h3 class="text-xl font-bold"
                    style="margin-top: 30px; margin-left: 23px; margin-right: 22px; font-family: 'IBM Plex Sans', sans-serif; font-size: 22px;">
                    Undergrad CS @KUET
                </h3>

                <h1 class="text-3xl font-semibold"
                    style="margin-top: 0px; margin-left: 23px; margin-right: 22px; font-family: ' Lusitana', serif; font-size: 32px; font-weight: 700; line-height: 44px;">
                    Machine Learning & Comp. Neuroscience Researcher
                </h1>

                <p class="text-base text-gray-700"
                    style="margin-bottom: 50px; margin-left: 23px; margin-right: 22px; font-family: 'IBM Plex Sans', sans-serif; font-size: 18px;">
                    I research neural mechanisms of human perception & memory to build assistive BCI devices. I’m also
                    engaged in QML research.
                </p>

            </div>
        </div>



        <div class="my_motivation_behind_this_work">
            <span class="highlighted-M">M</span>y work is driven by the belief that no one should be denied the gift of
            sight — that through understanding
            the brain, we can one day restore vision and bring light back to those who’ve only known darkness.
        </div>

        <VideoWithOverlay />
        


        <div style="width: 1px; height: 100px;"></div>
    </div>
</template>

<script setup>
import VideoWithOverlay from '~/components/VideoWithOverlay.vue'

const videoRef = ref(null);
const isPlaying = ref(false);

function togglePlay() {
    const video = videoRef.value;
    if (!video) return;

    if (video.paused) {
        video.play();
        isPlaying.value = true;
    } else {
        video.pause();
        isPlaying.value = false;
    }
}
</script>



<style lang="css" scoped>
.my_motivation_behind_this_work {
    margin-top: 76px;
    margin-bottom: 100px;
    font-family: "Lusitana", serif;
    font-size: 42px;
}

.highlighted-M {
    font-size: 57px;
    font-weight: 700;
}
</style>