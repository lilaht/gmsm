<template>
    <div id="HomeContainer" class="view-container container">
        <div id="HomeHeaderContainer" class="header-container container">
            <span class="header-main header">Good morning,<br/>sweet Marcy</span>
        </div>
        <div id="HomeInfoContainer" class="info-container container">
                <span class="info-txt">Fat Calf @ 6:30</span>
                <button class="menu-btn" @click="openMenu">The menu</button>
        </div>
        <div id="GameStartContainer" class="section-container game-start-container container">
            <button @click="passwordTime">I have something for you<br />Click here</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const passwordTime = () => {
        router.push('/password');
    }

    const options = { 
        weekday: 'long', // "Monday"
        month: 'long',   // "July"
        day: 'numeric'   // "2"
    } as Intl.DateTimeFormatOptions;
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);

    const openMenu = () => {
        window.open("https://fatcalfbrasserie.com/menu/", "_blank");
    }
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

.info-container {
    width: 75vw;
    justify-content: space-around;
    font-size: clamp(1rem, 5.5vh, 3rem);
    font-weight: 700;
    flex-direction: column;
}

.info-txt {
    font-weight: 700;
}

@media (max-width:767px)  {
    .view-container {
        justify-content: space-around;
    }

    .header-main {
        /* font-size: 16vh; */
        font-size: clamp(2rem, 9vh, 4.7rem);
        font-weight: 900;
        line-height: 120%;
    }

    .info-container {
        width: 75vw;
        justify-content: space-around;
        font-size: clamp(1rem, 4vh, 2.5rem);
        font-weight: 700;
        flex-direction: column;
    }

    .info-txt {
        font-weight: 700;
    }
}

</style>
