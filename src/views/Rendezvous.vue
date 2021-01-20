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
        ></b-form-input>
      </b-form-group>

      <b-form-group id="email" label="Email" label-for="email-input">
        <b-form-input
          id="email-input"
          v-model="form.email"
          type="email"
          placeholder="Πληκτρολογίστε το email σας"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="phone" label="Τηλέφωνο επικοινωνίας" label-for="phone-input">
        <b-form-input
          id="phone-input"
          v-model="form.phone"
          placeholder="Αριθμός τηλεφώνου"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="Date" label="Ημερομηνία" label-for="date-input">
        <b-form-datepicker id="datepicker" v-model="form.date" class="mb-2" @input="times"></b-form-datepicker>
      </b-form-group>

      <b-form-group id="time" label="Ώρα ραντευού:" label-for="time-input">
        <b-form-select
          id="time-input"
          v-model="form.time"
          :options="alltimes"
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
          afm: '',
          email: '',
          phone: '',
          date: null,
          time: null,
        },
        alltimes: null,
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault();
        const { data } = await this.$axios.post('/rendezvous', this.form);
        if (data.status != 200){
          alert("Κάτι πήγε στραβά, παρακαλώ προσπαθήστε αργότερα!");
          return;
        }
        alert("Το ραντευού κανονίνιστηκε για τις " + this.form.date + " " + this.form.time + "!");
        this.form.date = null;
        this.form.time = null;
        this.alltimes = null;
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.lastname = ''
        this.form.afm = ''
        this.form.email = ''
        this.form.phone = ''
        this.form.date = null
        this.form.time = null
        this.alltimes = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      async times(event) {

        this.alltimes =  [
        '09:00:00',
        '09:30:00',
        '10:00:00',
        '10:30:00',
        '11:00:00',
        '11:30:00',
        '12:00:00',
        '12:30:00',
        '13:00:00',
        '13:30:00',
        '14:00:00',
        '14:30:00',
        '15:00:00',
        '15:30:00',
        '16:00:00',
        '16:30:00'];

        let params = {
          Date : this.form.date,
        }
        
        const { data } = await this.$axios.get('/rendezvous', {
					params,
        });


        for (let i in data.times){
          var index = this.alltimes.indexOf(data.times[i]);
          if (index !== -1) {
            this.alltimes.splice(index, 1);
          }
        }
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
}

</style>