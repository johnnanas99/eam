<template>
  <div>
    <p> Hello there! </p>
    <Rendezvous/>
  </div>
</template>


<script>
// @ is an alias to /src
// import Register from '@/components/Register.vue'
import Rendezvous from '@/components/Rendezvous.vue'

export default {
  name: 'About',
  components: {
    // Register
    Rendezvous
  }
}
</script>

<style>
</style>