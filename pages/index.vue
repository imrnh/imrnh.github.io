<template>
    <div class="container mx-auto px-[2.39%] relative mt-10">

        <HeroSectionWV videoUrl="/sample-video.mp4" thumbnail="/assets/images/video_thumbnail.jpg"
            subtitle="Computer Science Student" title="Machine Learning & Comp. Neuroscience Researcher"
            description="I research neural mechanisms of human perception & memory to build assistive brain-interface devices. Alongside, I research optimization of QML algorithms and application in personalized medicine." />


        <!-- Motivation behind my work -->
        <div class="my_motivation_behind_this_work">
            <span class="highlighted-M">M</span>y work is driven by the belief that no one should be denied the gift of
            sight — that through understanding
            the brain, we can one day restore vision and bring light back to those who’ve only known darkness.
        </div>




        <div class="w-full flex flex-wrap justify-center sm:justify-between">
            <FeaturedReserchCardWithVideo videoUrl="/sample-video.mp4"
                thumbnail="/assets/images/pexels-googledeepmind-18069494.jpg"
                overlayText="Extensive experimental results demonstrate that expressive instructions are crucial to instruction-based." />

            <ResearchCard label="Perception"
                subheading="Human vision is a glitchy, amazing biological hack and your eyes guess. Shouldn't our eyes be better?"
                heading="Do we process vision the same way machines do?"
                image="/assets/images/pexels-googledeepmind-17483869.jpg" ml="10" mt="10" />

            <ResearchCard label="Perception"
                subheading="Human vision is a glitchy, amazing biological hack and your eyes guess. Shouldn't our eyes be better?"
                heading="Do we process vision the same way machines do?"
                image="/assets/images/pexels-googledeepmind-17483869.jpg" ml="10" mt="10" />


            <ResearchCard label="Perception"
                subheading="Human vision is a glitchy, amazing biological hack and your eyes guess. Shouldn't our eyes be better?"
                heading="Do we process vision the same way machines do?"
                image="/assets/images/pexels-googledeepmind-17483869.jpg" ml="10" mt="10" />

            <ResearchCard label="Perception"
                subheading="Human vision is a glitchy, amazing biological hack and your eyes guess. Shouldn't our eyes be better?"
                heading="Do we process vision the same way machines do?"
                image="/assets/images/pexels-googledeepmind-17483869.jpg" ml="10" mt="10" />

            <ResearchCard label="Perception"
                subheading="Human vision is a glitchy, amazing biological hack and your eyes guess. Shouldn't our eyes be better?"
                heading="Do we process vision the same way machines do?"
                image="/assets/images/pexels-googledeepmind-17483869.jpg" ml="10" mt="10" />

        </div>



        <div style="width: 1px; height: 100px;"></div>
    </div>
</template>

<script setup>
    import HeroSectionWV from '~/components/HeroSectionWV.vue';
    import FeaturedReserchCardWithVideo from '~/components/FeaturedReserchCardWithVideo.vue';
    import ResearchCard from '~/components/ResearchCard.vue';
</script>


<style scoped>
.my_motivation_behind_this_work {
    margin-top: 76px;
    margin-bottom: 100px;
    font-family: "Lusitana", serif;
    font-size: clamp(24px, 5vw, 42px);
    /* Responsive between 24px and 42px */
}

.highlighted-M {
    font-size: clamp(32px, 6.5vw, 57px);
    /* Responsive between 32px and 57px */
    font-weight: 700;
}
</style>