<template>
  <div class="body-bg antialiased bg-white grid place-content-center overflow-hidden bg-cover bg-fixed bg-no-repeat">
  </div>
  <Footer />
</template>

<style>
.body-bg {
  min-height: calc(100vh - 90px);
  background-image:url('/assets/home-bg.jpeg');
  /* background: linear-gradient(-45deg, #ee7752, #d4fb25, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite; */
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>

<script setup>
useHead({
  title: 'NgopiJS - Coffee & Code',
  meta: [
    { name: 'description', content: 'NgopiJS - Coffee & Code' }
  ]
})
</script>
