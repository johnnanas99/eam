<template>
  <div  >
    <b-form id="main" class="container mt-5 d-flex  flex-column max-width-200" @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="AFM" label="ΑΦΜ" label-for="afm-input" description="Με το ΑΦΜ σας θα γίνεται η σύνδεση">
        <b-form-input
          id="afm-input"
          v-model="form.afm"
          placeholder="Πληκτρολογίστε το ΑΦΜ"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password" label="Κωδικός πρόσβασης" label-for="password-input" description="Κάποιον κωδικό που να θυμάστε εύκολα!">
        <b-form-input
          id="password-input"
          v-model="form.password"
          type="password"
          placeholder="Κωδικός πρόσβασης"
          required
        ></b-form-input>
      </b-form-group>

      <b-button id="submit" class="button" type="submit">Login</b-button>
      <b-button type="reset" class="button" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          afm: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        // Login function
        alert("Σύνδεση επιτυχής!")
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.afm = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
#main {
  background-color : #E5E5E5;
  border-radius: 60px;
  width: 35%;
}

#submit {
  background-color: #2D9BB2;
}

.button{
  align-self: center;
  width: 30%;
}

</style>