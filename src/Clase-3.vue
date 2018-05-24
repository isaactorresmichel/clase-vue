<template>
<div>
  <h3>Componentes</h3>
  <p>Mi nombre es {{nombre}}</p>
  <button @click="nombre = 'Pedro'">Cambiar nombre</button>
  <hr>
  <!-- <Maestro v-for="(maestro, i) in 5" :key="i"></Maestro> -->
  <Maestro :nombre="nombre" :cambiaNombre="cambiaNombre" v-on:reiniciarnombre="reiniciarnombre($event)" ></Maestro>
  <Detalle></Detalle>
</div>
</template>

<script>
import Detalle from './componentes/detalle.vue';

export default {
  data() {
    return {
      nombre: 'Isaac'
    };
  },
  components: {
    Detalle
  },
  methods: {
    reiniciarnombre(e) {
      this.nombre = e;
    },
    cambiaNombre(s) {
      this.nombre = s;
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="scss">

</style>
