<template>
  <div id="whole">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
      {{ '当前节点id: ' + id }}
      <br>
      {{ '当前节点name: ' + name }}
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <main>

      <TheWelcome />
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
export default {
  data(data) {
    return {
      id: data.props.id,
      name: data.props.name,
    }
  },
  components: {
    HelloWorld,
    TheWelcome,
  },
  props: {
    props: Object,
  }
}
</script>

<style>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.vue-pro {
  padding: 12px;
}
</style>
