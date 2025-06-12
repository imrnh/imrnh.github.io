<template>
    <div class="relative aspect-[96/125] bg-zinc-300/0 w-[48%] lg:w-[31.5%]" :class="[
        ml ? `ml-${ml}` : '',
        mr ? `mr-${mr}` : '',
        mt ? `mt-${mt}` : '',
        mb ? `mb-${mb}` : '',
        'max-w-[80vw] min-w-[300px]',  // max 80vw, min 300px by default
        'sm:max-w-full sm:min-w-0',     // reset for sm and above
        isBelow640 ? 'mb-10' : ''
    ]">
        <div class="absolute top-0 left-0 w-full border-t border-black"></div>

        <div
            class="absolute top-[10px] left-0 w-full text-black text-xs font-semibold font-['Inter'] leading-[55px] tracking-tight text-left">
            {{ label }}
        </div>

        <div class="absolute top-[62px] left-0 w-full text-black text-2xl font-bold font-['Lusitana'] tracking-tight text-left"
            :class="{ 'mb-[10px]': isBelow640 }" ref="heading">
            {{ heading }}
        </div>

        <div class="absolute left-0 w-full text-black text-xs font-normal font-['Inter'] tracking-tight text-left"
            :class="{ 'mt-[0px]': isBelow640 }" :style="{ top: subheadingTop + 'px' }" ref="subheading">
            {{ subheading }}
        </div>

        <img class="absolute left-0 w-full h-auto rounded-md" :src="image" alt="Vision image"
            :style="{ top: imageTop + 'px' }" ref="image" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    label: { type: String, required: true },
    subheading: { type: String, required: true },
    heading: { type: String, required: true },
    image: { type: String, required: true },
    ml: { type: [String, Number], default: null },
    mr: { type: [String, Number], default: null },
    mt: { type: [String, Number], default: null },
    mb: { type: [String, Number], default: null },
});

// Responsive state for spacing
const isBelow640 = ref(false);
const subheadingTop = ref(139); // default top for subheading
const imageTop = ref(200); // default top for image

// Update spacing on resize
const updateSpacing = () => {
    const width = window.innerWidth;
    isBelow640.value = width < 640;

    if (isBelow640.value) {
        // Increase spacing by 30px below 640px
        subheadingTop.value = 139 + 10; // subheading moves down by 30px
        imageTop.value = 200 + 30;      // image moves down by 60px (30px after subheading too)
    } else {
        subheadingTop.value = 139;
        imageTop.value = 200;
    }
};

// On mount and resize
onMounted(() => {
    updateSpacing();
    window.addEventListener('resize', updateSpacing);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSpacing);
});
</script>

<style scoped>
@media (max-width: 420px) {
    div.relative {
        width: min(max(300px, 80vw), 100%);
    }
}
</style>
  
