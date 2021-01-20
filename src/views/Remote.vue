<template>
  <div  >
    <b-form id="main" class="container mt-5 d-flex  flex-column max-width-200" @submit="onSubmit" @reset="onReset" v-if="show">
      <h5>Δήλωση εξ αποστάσεως εργασίας εργαζομένου</h5>
      <b-form-group id="firstname" label="Όνομα εργαζομένου" label-for="firstname-input">
        <b-form-input
          id="firstname-input"
          v-model="form.firstname"
          placeholder="Πληκτρολογήστε το όνομα του εργαζομένου"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="lastname" label="Επώνυμο εργαζομένου" label-for="lastname-input">
        <b-form-input
          id="lastname-input"
          v-model="form.lastname"
          placeholder="Πληκτρολογήστε το επώνυμο του εργαζομένου"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="AFM" label="ΑΦΜ Εργαζομένου" label-for="afm-input">
        <b-form-input
          id="afm-input"
          v-model="form.person_id"
          placeholder="Πληκτρολογήστε τον ΑΦΜ του εργαζομένου"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="AFM" label="ΑΦΜ Επιχείρησης" label-for="afm-input">
        <b-form-input
          id="afm-input"
          v-model="form.work_id"
          placeholder="Πληκτρολογήστε τον ΑΦΜ της επιχείρησης"
          required
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
          placeholder="Πληκτρολογήστε έναν αριθμό τηλεφώνου"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="startDate" label="Ημερομηνία έναρξης" label-for="date-input">
        <b-form-datepicker id="datepicker" v-model="form.start_date" class="mb-2" required></b-form-datepicker>
      </b-form-group>
      
      <b-form-group id="endDate" label="Ημερομηνία ολοκλήρωσης" label-for="date2-input" 
      description="Αν δεν είστε σίγουρος/η, επιλέξτε ενδεικτικά. Μπορείτε να κάνετε ξανά δήλωση εργαζομένου μετά το πέρας της περιόδου">
        <b-form-datepicker id="datepicker2" v-model="form.end_date" class="mb-2" required></b-form-datepicker>
      </b-form-group>

      <b-form-group id="Comment" label="Τυχόν σχόλια" label-for="comment-input">
        <b-form-textarea v-model="form.comment" debounce="100" rows="3" max-rows="5"></b-form-textarea>
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
          person_id: '',
          work_id: '',
          comment: '',
          start_date: null,
          end_date: null,
        },
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault();
        const { data } = await this.$axios.post('/remote', this.form);

        if (data.status == 1){
          this.form.end_date = null;
          alert("Φαίνεται πως σε αυτές οι ημερομηνίες δεν είναι επιτρεπτές");
          return;
        }else if (data.status == 1452){
          this.form.end_date = null;
          alert("Τα ΑΦΜ δεν φαίνεται να είναι έγκυρα!");
          return;
        }else if(data.status == 500){
          this.form.end_date = null;
          alert("Κάτι πήγε στραβά, παρακαλώ προσπαθήστε αργότερα!");
          return;
        }
        alert("Ο εργαζόμενος " + this.form.lastname + " " + this.form.firstname + "με ΑΦΜ " + this.form.person_id +  " δηλώθηκε για εξ αποστάσεως εργασίας από " + this.form.start_date + " εώς " + this.form.end_date + "!");
        this.form.start_date = null;
        this.form.end_date = null;
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.person_id = ''
        this.form.work_id = ''
        this.form.comment = ''
        this.form.start_date = null
        this.form.end_date = null
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
  margin: 15px;
}

h5{
  padding: 25px;
}
</style>
