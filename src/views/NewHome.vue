<template>
  <div class="NewHome">

        <section id="topfold">
            <router-link to="/covid19">
                <img id="covid_image" src="https://www.aade.gr/sites/default/files/inline-images/menoume_spiti_01.png">
            </router-link>
            <div id="covid_info">
            <router-link to="/covid19" class="button"> Κορωνοϊός covid-19: Τι πρέπει να γνωρίζετε</router-link>
               
            <br>
            <div id="hlektronikes_ait">Μένουμε ασφαλείς, Κάνουμε 
                <a href="aithseis.html">
                    ηλεκτρονικές αιτήσεις.
                </a>
                <br>
                <br>
                Εξυπηρέτηση κοινού <strong>μόνο</strong> κατόπιν ραντεβού.
                <br>
                <router-link to="/rendezvous">Κλείστε ραντεβού ηλεκτρονικά.</router-link>
            </div>
            </div>
            <div id="generalinfo">
                <div id="home_faq">
                    <ol>
                        <router-link to="/faq" class="h2">Συχνές ερωτήσεις</router-link>
                        
                        <li> <router-link to="/faq">Πόσες μέρες άδειας δικαιούμαι ;</router-link></li>
                        <li> Τι έγγραφα πρέπει να συμπληρώσω για το επίδομα αναστολής εργασίας ;</li>
                        <li> link 3</li>
                        <li> link 4</li>
                        
                    </ol>
                </div>
                
            </div>
	</section>
    
    <block id="bottomfold">
        <h2>Ανακοινώσεις</h2>
        <ul>
            <li> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nostrum, unde magnam impedit voluptatem, illo, laborum quae doloribus animi saepe reiciendis modi explicabo! Accusantium repellendus voluptas architecto at rem earum.</li>
            <li> Ανακοίνωση 2</li>
            <li> Ανακοίνωση 3</li>
            <li> </li>
            <li> </li>
        </ul>
    </block>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'NewHome'
}
</script>

<style scoped>
li{
	padding: 10px;	
}

#generalinfo{
	text-align: right;
	word-wrap: break-word;
	max-width: 500px;
}

h2, .h2, a.ol{
    color:#2c3e50;
	padding: 5px;
    padding-left: 25px;
	
}
#home_image{
	width:300px;
	height:auto;
	border-radius: 5%;
}

#covid_image{
	width:280px;
	height:auto;
	border-radius: 40%;
}

/*img{
	border-radius: 50%;
}*/

section{
	padding: 50px 20px 30px;
	justify-content: space-between;
}

#topfold{
	display: flex;
}

#bottomfold{
    padding-left:150px;
    text-align: left;
}

#covid_info{
	display:default;
	text-align: center;
    padding-top: 25px;
}

#hlektronikes_ait{
	padding:20px;
    padding-top: 75px;
	font-size: 20px;
	font-weight: 400;
}

.icon{
	width: 50px;
	height: auto;
	border-radius: 50%;
	/*box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);*/
	padding: 10px;
}

ol{
	border: 8px solid white;
	padding: 10px;
}

a.button {
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;

    /*text-decoration: none;*/
    color: #FE8891;
    padding: 15px;
    font-size: 20px;
  	font-weight: 550;
  	border: 15px solid white;
  	margin: 15px;
  	box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
}

</style>
