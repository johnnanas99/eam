<template>
  <div>
    <b-form id="main" class="container mt-5 d-flex  flex-column max-width-200" @submit="onSubmit" @reset="onReset" v-if="show">
      <h5>Δήλωση εργαζομένου σε αναστολή<br> ή άδεια ειδικού σκοπού</h5>

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

      <b-form-group id="startDate" label="Ημερομηνία έναρξης" label-for="start_date-input">
        <b-form-datepicker id="datepicker" v-model="form.start_date" class="mb-2" required></b-form-datepicker>
      </b-form-group>

        <b-form-group id="endDate" label="Ημερομηνία ολοκλήρωσης" label-for="end_date-input" 
      description="Επιλέξτε στην περίπτωση άδειας ειδικού σκοπού.">
        <b-form-datepicker id="datepicker_2" v-model="form.end_date" class="mb-2"></b-form-datepicker>
      </b-form-group>

      <b-form-group id="type" label="Αιτιολογία" label-for="type-input">
        <b-form-select
          id="type-input"
          v-model="form.type2"
          :options="dayoff_types"
          required
        ></b-form-select>
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
            start_date: null,
            end_date: null,
            type: null,
            type2: null,
        },
        dayoff_types: ['Αναστολή εργασίας','Άδεια ειδικού σκοπού'],
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault();
        if (this.form.type2 == 'Αναστολή εργασίας'){
          this.form.type = 'covid19'
        }else{
          this.form.type = 'parent'
        }
        if(this.form.end_date == null){
          this.form.end_date = "9999-12-31"
        }
        if(this.form.type == 'parent' && this.form.end_date == "9999-12-31"){
          this.form.end_date = null;
          alert("Παρακαλώ επιλέξτε ημερομηνία ολοκλήρωσης άδειας ειδικού σκοπού.")
          return;
        }
        const { data } = await this.$axios.post('/day_off', this.form);
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
        this.form.end_date = null;
        alert("Ο εργαζόμενος "+ this.form.person_id + " δηλώθηκε για " + this.form.type2 + " από " + this.form.start_date + "!");
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.person_id = ''
        this.form.work_id = ''
        this.form.start_date = null
        this.form.end_date = null
        this.form.type = null
        this.form.type2=null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    }
  }
</script>

<style>
#main {
  background-color : #E5E5E5;
  border-radius: 60px;
  width: 35%;
  margin-bottom: 50px;
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
