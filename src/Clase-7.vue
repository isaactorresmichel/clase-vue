<template>
  <div>
    <h1>{{ titulo | upper | lower }}</h1>
    <p>{{saludo}}</p>
    <div>
      Filtro: <input type="text" v-model="filtroIngrediente">
      <ul>
        <li v-for="(ingrediente, index) in ingredientesfiltrados" :key="index"> {{ ingrediente }} </li>
      </ul>
    </div>
    <Ingredientes></Ingredientes>
  </div>
</template>

<script>
import { IngredientesMixin } from "./componentes/ingredientes.js";
import Ingredientes from "./componentes/ingredientes.vue";
export default {
  data() {
    return {
      titulo: "Filtros y Mixins"
    };
  },
  components: {
    Ingredientes
  },
  filters: {
    upper(value) {
      return value.toUpperCase();
    }
  },
  mixins: [IngredientesMixin]
};
</script>

<style lang="scss" scoped>
</style>

