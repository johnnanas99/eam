<template>
	<div style="bottom: 0px; position:relative; width:100%;">
		<b-navbar toggleable="lg" type="dark" variant="info" style="height:100px;">
			<div style="position: absolute; top: 8px; left: 16px;">
				<!-- <i class="fas fa-plus">EAM</i> -->
                <ul style="list-style-type:none;">
                    <li>
                        <router-link to="/">
                            <img src="../images/small_logo.png" alt="logo" width="50px" height="50px">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/" style="color: white; text-decoration: underline;">Αρχική σελίδα</router-link>
                    </li>
                </ul>
			</div>

			<b-navbar-nav style="margin-left: 200px">
				<ul class="list">
                    <li> WOW </li>
                    <li>Double WOW </li>
                </ul>
			</b-navbar-nav>
            <b-navbar-nav>
				<ul class="list">
                    <li> Triple WOW </li>
                    <li>Quadraple WOW </li>
                </ul>
			</b-navbar-nav>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style scoped>

img {
  border-radius: 50px;
}

.icon {
	color: white;
}

li {
    color: white;
}

.list {
    list-style-type: none;
    border-left: solid 1px;
    border-left-color: white;
    margin-right: 20px;
    padding-left: 5px;
}


</style>
