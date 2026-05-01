<template>
  <div class="container">
    <div class="header">I hope you have a good day :)</div>
    <iframe
      id="spotify-iframe"
      data-testid="embed-iframe"
      src="https://open.spotify.com/embed/playlist/2CdzmfPMQK5kbsen41LfFx"
      width="100%"
      height="70%"
      frameBorder="0"
      allowfullscreen="false"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.container {
  width: 50vw;
  justify-content: center;
  align-items: center;
  z-index: 1;

  flex-direction: column;
}

.header {
  /* font-size: 5.5vh; */
  font-size: clamp(1rem, 5.5vh, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

#spotify-iframe {
  border-radius: 12px;
}

@media (max-width: 767px) {
  .header {
    font-size: clamp(1rem, 4.7vh, 2rem);
    font-weight: 700;
  }

  .container {
    width: 85vw;
    text-align: center;
  }
}
</style>
