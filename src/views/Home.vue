<template>
    <div id="HomeContainer" class="view-container container">
        <div id="HomeHeaderContainer" class="header-container container">
            <span class="header-main header">Good morning,<br/>sweet Marcy</span>
        </div>
        <div id="HomeInfoContainer" class="info-container container">
            <div id="PlanBox" class="header-info">
                Fat Calf, 6:30<br />[menu]
            </div>
            <div id="DayWeatherBox" class="header-info">
                {{ formattedDate }}<br />[weather]
            </div>
        </div>
        <div id="GameStartContainer" class="section-container game-start-container container">
            <!-- <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2CdzmfPMQK5kbsen41LfFx" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
            <button @click="passwordTime">I have something for you.<br />Click here.</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
    const router = useRouter();

    const passwordTime = () => {
        router.push('/but-first');
    }

        const options = { 
            weekday: 'long', // "Monday"
            month: 'long',   // "July"
            day: 'numeric'   // "2"
        } as Intl.DateTimeFormatOptions;
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', options);
</script>


<style scoped>

body {
    align-items: center;
    justify-content: center;
}

.view-container {
    justify-content: space-around;
}

.header-main {
    /* font-size: 16vh; */
    font-size: clamp(3rem, 16vh, 7rem);
    font-weight: 900;
    line-height: 120%;
}

.header-info {
    /* font-size: 5.5vh; */
    font-size: clamp(1rem, 5.5vh, 3rem);
    font-weight: 700;
}

.info-container {
    width: 75vw;
    justify-content: space-around;
}




</style>
