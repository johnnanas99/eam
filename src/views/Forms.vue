<template>
    <div class="forms">
        <h2>Ηλεκτρονικές αιτήσεις και έντυπα</h2>
        <section class="forms--list">
        <div class="covid19forms">
            <h4>Δηλώσεις covid-19:</h4>
            <ul>
                <li><router-link to="/Remote">Εξ αποστάσεως εργασία</router-link></li>
                <li><router-link to="/Dayoff">Άδεια ειδικού σκοπού</router-link></li>
                <li><router-link to="/Dayoff">Αναστολή εργασίας</router-link></li>   
            </ul>
        </div>
        <div class="allforms">
            <h4>Για τους εργαζομένους</h4>
            <ul>
                <li><router-link to="#">Παράδειγμα 1 Αίτηση άδειας μητρότητας </router-link></li>
                <li><router-link to="#">Παράδειγμα 2</router-link></li>
                <li><router-link to="#">Παράδειγμα 3</router-link></li>   
            </ul>
            <h4>Για τους εργοδότες</h4>
            <ul>
                <li><router-link to="#">example link 1: </router-link></li>
                <li><router-link to="#">example link 2</router-link></li>
                <li><router-link to="#">example link 3</router-link></li>   
            </ul>
            <h4>Άλλες ηλεκτρονικές αιτήσεις και δηλώσεις</h4>
            <ul>
                <li><router-link to="#">example link 1 Αίτηση για πρόγραμμα νεανικής επαγγελματικότητας  </router-link></li>
                <li><router-link to="#">example link 2</router-link></li>
                <li><router-link to="#">example link 3</router-link></li>   
            </ul>
            <h4>Έντυπα:</h4>
            <ul>
                <li><router-link to="#">example pdf 1</router-link></li>
                <li><router-link to="#">example pdf 2</router-link></li>
                <li><router-link to="#">example pdf 3</router-link></li>   
            </ul>
        </div>
        </section>
    </div>
    
</template>

<script>
export default {
    name: 'Forms'
}
</script>

<style scoped>

section {
	padding: 50px 20px;
	justify-content:center;
	display: flex;
    text-align: center;
}
h2{
    text-align: center;
    padding: 10px;
    margin-top: 45px;
    color: rgba(5, 77, 99, 0.959);
    font-weight: 600;
}

.covid19forms, .allforms{
    background: rgb(233, 227, 227);
    margin: 30px;
    margin-top: 0;
    width: 40%;
    border-style:dotted;
    border-radius: 5%;
    border-color: rgba(3, 62, 80, 0.671);
    padding:20px;
}

h4{
   padding: 25px;
   font-weight: 600;
   color: rgba(5, 77, 99, 0.959);
}
li{
    padding:10px;
    text-align: start;
    color: rgb(3, 62, 80);
}
a {
    color: rgba(4, 101, 146, 0.815);
}
</style>