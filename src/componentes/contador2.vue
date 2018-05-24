<template>
  <div>
    <h1>Contador Asincrono</h1>
    <button @click="contadorIncrementarAsync({incremento: 2, tiempo: 2000})">Incrementa</button>
    <button @click="contadorDecrementarAsync({incremento: 2, tiempo: 2000})">Decrementa</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
     ...mapActions(['contadorIncrementarAsync', 'contadorDecrementarAsync'])
  }
}
</script>

