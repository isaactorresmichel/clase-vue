<template>
	<div>
		<h1>Editar usuario {{id}}</h1>
    {{q}}, {{lang}}
    <div style="height: 700px"></div>
    <div id="mas">Más información</div>
		<hr>
		<router-link tag="button" :to="{name: 'usuario-detalle', params: {id}}">Volver</router-link>
	</div>
</template>

<script>
export default {
  data() {
    return {
      prueba: 'Esto es una prueba'
    }
  },
  computed: {
   	id() {
   		return this.$route.params.id
   	},
    q() {
      return this.$route.query.q
    },
    lang() {
      return this.$route.query.lang
    }
  },
  beforeRouteEnter(to, from, next) {
    next((contexto) => {
      console.log('beforeRouteEnter local', contexto.prueba)
    });
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave local')
    if (confirm('Estas seguro?')) {
      next();
    } else {
      next(false);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>