<template>
  <div>
    Maestro
    <hr>
      <p>Mi nombre es {{nombre}}</p>
      <p>Mi nombre es {{nombreMayusculas}}</p>
      <button @click="reiniciarnombre">Reiniciar nombre EVENTO</button>
      <button @click="cambiaNombre('Alejandro')">Reiniciar nombre FN</button>
      <button @click="cambiarEdadEB">Cambiar edad por bus de eventos</button>
  </div>
</template>

<script>
import {busEventos} from '../main';

export default {
  data() {
    return {};
  },
  // props: ['nombre'],
  props: {
    nombre: {
      type: String,
      // default: 'Luis',
      required: true
    },
    cambiaNombre: {
      type: Function
    },
  },
  methods: {
    reiniciarnombre() {
      this.$emit('reiniciarnombre', 'Hugo');
    },
    cambiarEdadEB() {
      busEventos.cambiarEdad(10);
    }
  },
  computed: {
    nombreMayusculas () { return this.nombre.toUpperCase()}
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>

