<template>
  <div>
    <h1>Vuex</h1>
    <!-- <Resultado :contador="contador"></Resultado> -->
    <Resultado></Resultado>
    <!-- <Contador @actualizarContador="actualizarContador"></Contador> -->
    <hr>
    <Contador></Contador>
    <hr>
    <Contador2></Contador2>
    <hr>
    <p>Binding de doble via</p>
    <!-- <input type="text" :value="valor" @input="actualizaValor"> -->
    <input type="text" v-model="valor">
    <p>{{valor}}</p>
  </div>
</template>

<script>
import Contador from './componentes/contador';
import Contador2 from './componentes/contador2';
import Resultado from './componentes/resultado';

export default {
  data() {
    return {
      // contador: 0,
    }
  },
  components: {
    Contador,
    Contador2,
    Resultado
  },
  methods: {
    // actualizarContador(param) {
    //  this.contador += param;
    // }
    actualizaValor(event) {
      console.log(this.$store);
      this.$store.dispatch('setValor', event.target.value);
    }
  },
  computed: {
    valor: {
      set(val) {
        this.$store.dispatch('setValor', val);
      },
      get() {
        return this.$store.getters.valor;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

