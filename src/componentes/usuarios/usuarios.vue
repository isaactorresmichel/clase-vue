<template>
	<div>
		<h1>Lista de usuarios</h1>
    <hr>
    <ul>
      <router-link to="/usuario/1" active-class="activo" tag="li" exact>Usuario 1</router-link>
      <router-link to="/usuario/2" active-class="activo" tag="li" exact>Usuario 2</router-link>
      <router-link to="/usuario/3" active-class="activo" tag="li" exact>Usuario 3</router-link>
      <router-link to="/usuario/4" active-class="activo" tag="li" exact>Usuario 4</router-link>
    </ul>
	</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>

</style>