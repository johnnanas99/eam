<template>
  <div  >
    <b-form id="main" class="container mt-5 d-flex  flex-column max-width-200" @submit="onSubmit" @reset="onReset" v-if="show">
      <h5>Δήλωση εξ αποστάσεως εργασίας εργαζομένου</h5>
      <b-form-group id="firstname" label="Όνομα εργαζομένου" label-for="firstname-input">
        <b-form-input
          id="firstname-input"
          v-model="form.firstname"
          placeholder="Πληκτρολογήστε το όνομα του εργαζομένου"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="lastname" label="Επώνυμο εργαζομένου" label-for="lastname-input">
        <b-form-input
          id="lastname-input"
          v-model="form.lastname"
          placeholder="Πληκτρολογήστε το επώνυμο του εργαζομένου"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="AFM" label="ΑΦΜ Εργαζομένου" label-for="afm-input">
        <b-form-input
          id="afm-input"
          v-model="form.afmergazomenou"
          placeholder="Πληκτρολογήστε τον ΑΦΜ του εργαζομένου"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="AFM" label="ΑΦΜ Επιχείρησης" label-for="afm-input">
        <b-form-input
          id="afm-input"
          v-model="form.afmepixeirisis"
          placeholder="Πληκτρολογήστε τον ΑΦΜ της επιχείρησης"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="email" label="Email" label-for="email-input">
        <b-form-input
          id="email-input"
          v-model="form.email"
          type="email"
          placeholder="Πληκτρολογήστε το email σας για επιβεβαίωση"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="phone" label="Τηλέφωνο επικοινωνίας" label-for="phone-input">
        <b-form-input
          id="phone-input"
          v-model="form.phone"
          placeholder="Πληκτρολογήστε προαιρετικά έναν αριθμό τηλεφώνου"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="startDate" label="Ημερομηνία έναρξης" label-for="date-input">
        <b-form-datepicker id="datepicker" v-model="form.startdate" class="mb-2" @input="times"></b-form-datepicker>
      </b-form-group>
      
      <b-form-group id="endDate" label="Ημερομηνία ολοκλήρωσης" label-for="date-input" 
      description="Αν δεν είστε σίγουρος/η, επιλέξτε ενδεικτικά. Μπορείτε να κάνετε ξανά δήλωση εργαζομένου μετά το πέρας της περιόδου">
        <b-form-datepicker id="datepicker" v-model="form.enddate" class="mb-2" @input="times"></b-form-datepicker>
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
          afmergazomenou: '',
          afmepixeirisis: '',
          email: '',
          phone: '',
          startdate: null,
          enddate: null,
        },
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault();
        const { data } = await this.$axios.post('/remote', this.form);
        if (data.status != 200){
          alert("Κάτι πήγε στραβά, παρακαλώ προσπαθήστε αργότερα!");
          return;
        }
        alert("Ο εργαζόμενος " + this.form.lastname + " " + this.form.firstname + " δηλώθηκε για εξ αποστάσεως εργασίας από " + this.form.startdate + " εώς " + this.form.enddate + "!");
        this.form.startdate = null;
        this.form.enddate = null;
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.lastname = ''
        this.form.afmergazomenou = ''
        this.form.afmepixeirisis = ''
        this.form.email = ''
        this.form.phone = ''
        this.form.startdate = null
        this.form.enddate = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async times(event) {
        let params = {
          Date : this.form.startdate, 
          Date : this.form.enddate,
        }
        
        const { data } = await this.$axios.get('/remote', {
					params,
        });
        this.form.time = null;
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
  margin: 15px;
}

h5{
  padding: 25px;
}
</style>