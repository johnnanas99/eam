<template>
  <div  >
    <b-form id="main" class="container mt-5 d-flex  flex-column max-width-200" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="firstname" label="Όνομα" label-for="firstname-input">
        <b-form-input
          id="firstname-input"
          v-model="form.firstname"
          placeholder="Πληκτρολογίστε το όνομα σας"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="lastname" label="Επώνυμο" label-for="lastname-input">
        <b-form-input
          id="lastname-input"
          v-model="form.lastname"
          placeholder="Πληκτρολογίστε το επώνυμο σας"
          required
        ></b-form-input>
      </b-form-group>

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

      <b-form-group id="password2" label="Επανάληψη κωδικόυ πρόσβασης" label-for="password2-input">
        <b-form-input
          id="password2-input"
          v-model="form.password2"
          type="password"
          placeholder="Επανάληψη κωδικόυ πρόσβασης"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="email" label="Email" label-for="email-input">
        <b-form-input
          id="email-input"
          v-model="form.email"
          type="email"
          placeholder="Πληκτρολογίστε το email σας"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="phone" label="Τηλέφωνο επικοινωνίας" label-for="phone-input">
        <b-form-input
          id="phone-input"
          v-model="form.phone"
          placeholder="Αριθμός τηλεφώνου"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="address" label="Διεύθυνση 1ης Κατοικίας" label-for="address-input">
        <b-form-input
          id="address-input"
          v-model="form.address"
          placeholder="Οδός αριθμός Δημος"
        ></b-form-input>
      </b-form-group>

      <b-button id="submit" class="button" type="submit">Submit</b-button>
      <b-button type="reset" class="button" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          afm: '',
          password: '',
          password2: '',
          email: '',
          phone: null,
          address: null,
        },
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        if (this.form.password != this.form.password2){
          alert("Οι κωδικοί πρόσβασης δεν ταιρίαζουν! Πληκτρολογίστε τους ξανά.")
          return
        }
        const { data } = await this.$axios.post('/register', this.form);
        if (data.status == 404){
          alert("Δεν είστε καταχωρημένος στην βάση. Αν τα στοιχεία που δώσατε είναι σωστά,επικοινωνήστε μαζί μας!")
        }else if(data.status == 500){
          alert("Κάτι πήγε στραβά, παρακαλώ προσπαθήστε αργότερα!");
        }else if(data.status == 1062){
          alert("Ο λογαριασμός υπάρχει. Μήπως θέλετε να συνδεθείτε;");
        }else{
          alert("Η εγγραφή σας ολοκληρώθηκε επιτυχώς! Συνδεθείτε για να αποκτήσετε πρόσβαση στον λογαριασμό σας!")
          this.$router.push('/login');
        }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.afm = ''
        this.form.password = ''
        this.form.password2 = ''
        this.form.email = ''
        this.form.phone = null
        this.form.address = null
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