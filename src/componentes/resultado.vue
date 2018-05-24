<template>
  <div>
    <h1>Resultado</h1>
    <h3>{{ contador }}</h3>
    <h3>{{ contadorTexto }}</h3>
    <h3>{{ contadorDoble }}</h3>
    <h3>{{ contadorTriple }}</h3>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'contador', 
      'contadorTexto', 
      'contadorDoble']),
    contadorTriple() {
      return this.contador * 3;
    }
  }
  // props: {
  //  contador: {
  //    type: Number
  //  }
  // },
  // computed: {
  //   contador() {
  //     // return this.$store.state.contador;
  //     return this.$store.getters.contador;
  //   },
  //   contadorTexto() {
  //     // return this.$store.state.contador;
  //     return this.$store.getters.contadorTexto;
  //   },
  //   contadorDoble() {
  //     // return this.$store.state.contador;
  //     return this.$store.getters.contadorDoble;
  //   }
  // }

}
</script>

<style lang="scss" scoped>

</style>

