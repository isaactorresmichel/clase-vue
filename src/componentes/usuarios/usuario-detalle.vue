<template>
	<div>
		<h1>Usuario {{id}}</h1>
		<hr>
		<button @click="regresarHome">Regresar a home</button>
		<button @click="volver">Volver</button>
		<router-link tag="button" :to="parametros">Editar</router-link>
	</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  	regresarHome() {
  		// this.$router.push('/usuario');	
  		this.$router.push({name: 'home'});
  	},
  	volver() {
  		// this.$router.push('/usuario');	
  		this.$router.push({name: 'usuario'});
  	},
  },
  computed: {
  	id() {
  		return this.$route.params.id
  	},
    parametros() {
      return {
        name: 'usuario-editar',
        params: { id: this.id },
        query: {
          lang: 'es',
          q: 10,
        },
        hash: '#mas'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>