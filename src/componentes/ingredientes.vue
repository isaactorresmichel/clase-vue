<template>
    <div>
      Filtro: <input type="text" v-model="filtroIngrediente">
      <input type="text" v-model="nuevoingrediente">
      <button @click="ingredientes.push(nuevoingrediente)">Agregar</button>
      <ul>
        <li v-for="(ingrediente, index) in ingredientesfiltrados" :key="index"> {{ ingrediente }} </li>
      </ul>
    </div>
</template>

<script>
import {IngredientesMixin} from './ingredientes.js'
export default {
  data() {
    return {
      nuevoingrediente: ''
    }
  },
  mixins: [IngredientesMixin]
}
</script>

<style lang="scss" scoped>
</style>

