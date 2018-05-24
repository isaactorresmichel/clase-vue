<template>
  <div>
    <h1>Contador</h1>
    <button @click="contadorIncrementar(2)">Incrementa</button>
    <button @click="contadorDecrementar(2)">Decrementa</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
     ...mapMutations(['contadorIncrementar', 'contadorDecrementar'])
     //contadorIncrementar() {
      //this.$store.state.contador++;
      // this.$emit('actualizarContador', 1);
       // this.$store.commit('contadorIncrementar');
     //},
    //contadorDecrementar() {
      // this.$store.state.contador--;
      // this.$emit('actualizarContador', -1);
       //this.$store.commit('contadorDecrementar');
     //}
  }
}
</script>

<style lang="scss" scoped>

</style>

