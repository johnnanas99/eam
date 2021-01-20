<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand href="#">
				<!-- <i class="fas fa-plus">EAM</i> -->
				<router-link to="/">
					<img src="https://artandcultureprofessionals.services.gov.gr/MainLogoArt.gif" alt="logo" width="220px">
				</router-link> |
				
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-navbar-nav>
				<b-nav-item-dropdown href="#" text="Εργαζόμενοι">
					<div>
						<b-dropdown-item href="#">Αναζήτηση αρχείου εργαζομένου</b-dropdown-item>
						<b-dropdown-item href="#">Αιτήσεις και έντυπα</b-dropdown-item>
						<b-dropdown-item href="#/covid19">Covid19</b-dropdown-item>
					</div>
				</b-nav-item-dropdown>
				<b-nav-item-dropdown
					href="#"
					text="Εργοδότες"
				></b-nav-item-dropdown>
				<b-nav-item-dropdown
					href="#"
					text="Άνεργοι"
				></b-nav-item-dropdown>
				<b-nav-item-dropdown href="#" text="Γενικά">
					<div>
						<b-dropdown-item href="#">Ανακοινώσεις</b-dropdown-item>
						<b-dropdown-item href="#">Αιτήσεις και έντυπα</b-dropdown-item>
						<b-dropdown-item href="#">Εγκύκλιοι και γενικά θέματα</b-dropdown-item>
						<b-dropdown-item href="#">Διεθνή θέματα</b-dropdown-item>
						<b-dropdown-item href="#">Συχνές ερωτήσεις</b-dropdown-item>
						<b-dropdown-item href="#">Επικοινωνία/Αναφορά σφάλματος</b-dropdown-item>
					</div>

				</b-nav-item-dropdown>
			</b-navbar-nav>
			<b-dropdown
				style="margin-left: auto"
				size="lg"
				variant="link"
				toggle-class="text-decoration-none"
				no-caret
				right
			>
				<template #button-content>
					<i class="fa fa-bars icon"></i>
					<span class="sr-only">Search</span>
				</template>
				<b-dropdown-item href="#">Action</b-dropdown-item>
				<b-dropdown-item href="#">Another action</b-dropdown-item>
				<b-dropdown-item href="#"
					>Something else here...</b-dropdown-item
				>
			</b-dropdown>
			<div class="rcorner_top">
				<router-link to="/login">Σύνδεση </router-link>
				 // 
				<router-link to="/register">Εγγραφή</router-link>
				<router-link to="/contact">
					<img class="icon" src="https://p7.hiclipart.com/preview/826/886/420/iphone-computer-icons-telephone-call-phone-call-icon.jpg">
				</router-link>
			</div>
		</b-navbar>
			
	</div>
</template>

<script>
export default {
	name: 'NavBar',
};
</script>

<style scoped>

img {
	height:auto;
	border-radius: 50px;
}

/*.icon {
	color: white;
}*/
.icon{
	width: 75px;
	height: auto;
	border-radius: 50%;
	/*box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);*/
	padding: 10px;
}

/*.b-navbar-nav{
	color: whitesmoke;
}*/

b-nav-item-dropdown.text{
	color:whitesmoke;
}

b-navbar{
	font-size:20px;
	background: #019da8;
	padding: 20px;
	display: flex;
	justify-content: space-between;

}

.rcorner_top{
	/*display: inline;
	text-align: center;*/
	display: flex;
	align-items:center;
	padding: 10px;
	font-size: 18px;
	color:#E5E5E5;
}
a{
	color:#E5E5E5;	
}
</style>