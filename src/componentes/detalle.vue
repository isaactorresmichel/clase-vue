<template>
  <div>
    Edad: {{edad}}
  </div>
</template>

<script>

import {busEventos, CAMBIAR_EDAD} from '../main';

export default {
  data() {
    return {
      edad: 30
    }
  },
  created() {
    busEventos.$on(CAMBIAR_EDAD, edad => {
      this.edad = edad
    })
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
