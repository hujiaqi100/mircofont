<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<script>
export default {
  methods: {
    official: () => {
      postMessage({
        openTab: {
          url: 'https://cn.vitejs.dev/'
        }
      })
    },
    official1: () => {
      postMessage({
        openTab: {
          url: 'https://cn.vuejs.org/'
        }
      })
    }
  }
}
</script>
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <br>
      <a v-on:click="official">Vite(可点开新tab)</a>
      <br>
      <a v-on:click="official1">Vue 3(可点开新tab)</a>.
    </h3>
  </div>
</template>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  color: #fff;
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
