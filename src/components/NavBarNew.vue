<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="info">
			<b-navbar-brand href="#">
				<!-- <i class="fas fa-plus">EAM</i> -->
				<router-link to="/">
					<img src="../images/MainLogoArt.png" alt="logo" width="200px">
				</router-link> |
				
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-navbar-nav>
				<b-nav-item-dropdown href="#" text="Είμαι εργαζόμενος">
					<div>
						<b-dropdown-item href="#">Action</b-dropdown-item>
						<b-dropdown-item href="#"
							>Another action</b-dropdown-item
						>
						<b-dropdown-item href="#"
							>Something else here</b-dropdown-item
						>
					</div>
				</b-nav-item-dropdown>
				<b-nav-item-dropdown
					href="#"
					text="Είμαι εργοδότης"
				></b-nav-item-dropdown>
				<b-nav-item-dropdown
					href="#"
					text="Είμαι άνεργος"
				></b-nav-item-dropdown>
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
  border-radius: 50px;
}

.icon {
	color: white;
}
</style>
