<template>
  <RouterView />
  <div class="heart-background-layer">
    <div
      v-for="heart in hearts"
      :key="heart.index"
      :class="heart.class"
      :style="{
        '--left': heart.left,
        '--delay': heart.delay,
        '--duration': heart.duration,
        '--size': heart.size,
        '--tilt': heart.tilt,
      }"
    >
      <div class="heart-shape"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()

var isHome = () => {
  return route.path == '/'
}

type THeart = {
  index: number
  class: string
  left: string
  delay: string
  duration: string
  size: string
  tilt: string
}

const heartClass = {
  purple: 'purple-heart',
  blue: 'blue-heart',
}

var numOfHearts = 50
var hearts = ref<THeart[]>([])

var isPurple = true

onMounted(() => {
  const generatedHearts: THeart[] = []

  for (let i = 0; i < numOfHearts; i++) {
    generatedHearts.push({
      index: i,
      class: (isPurple ? heartClass.purple : heartClass.blue) + ' heart-emitter',
      left: Math.random() * 100 + '%',
      delay: Math.random() * -20 + 's',
      duration: 5 + Math.random() * 5 + 's',
      size: 10 + Math.random() * 20 + 'px',
      tilt: Math.random() * 90 - 45 + 'deg',
    })

    isPurple = !isPurple
  }

  hearts.value = generatedHearts
})
</script>

<style scoped>
.heart-background-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.heart-emitter {
  position: absolute;
  bottom: -50px;
  left: var(--left);
  width: var(--size);
  height: var(--size);
  animation: float-up var(--duration) linear infinite;
  animation-delay: var(--delay);
}

/* Specific Hex Colors */
.purple-heart .heart-shape {
  background-color: #450696;
}
.blue-heart .heart-shape {
  background-color: #101a85;
}

.heart-shape {
  position: relative;
  width: 100%;
  height: 100%;
  /* Geometrically aligns the square to be the base of the heart */
  transform: rotate(-45deg);
}

.heart-shape::before,
.heart-shape::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: inherit;
  border-radius: 50%;
}

.heart-shape::before {
  top: -50%;
  left: 0;
}
.heart-shape::after {
  top: 0;
  left: 50%;
}

@keyframes float-up {
  0% {
    /* Random tilt applied here, separate from shape rotation */
    transform: translateY(0) rotate(var(--tilt)) scale(0.5);
    opacity: 0;
  }
  20% {
    opacity: 0.37;
  }
  80% {
    opacity: 0.37;
  }
  100% {
    transform: translateY(-110vh) rotate(var(--tilt)) scale(1.2);
    opacity: 0;
  }
}
</style>
