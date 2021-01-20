<template>
  <div>
    <h1>Ηλεκτρονικές Αιτήσεις</h1>
    <ul>
        <li><router-link to="/day_off">Άδεια ειδικού σκοπού</router-link></li>
        <li><router-link to="/day_off">Αναστολή εργασίας εργαζομένου</router-link></li>
        <li><router-link to="/remote">Εξ αποστάσεως εργασία εργαζομένου</router-link></li>
    </ul>
  </div>
</template>


<script>
// @ is an alias to /src


export default {
  name: 'Forms',
  components: {
     
  }
}
</script>

<style>
</style>