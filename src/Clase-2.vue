<template>
<div>
  <div class="contenedor">
    <div class="cuadro" :class="calculatedClass">
    </div>
    <div class="cuadro" :class="[classInput, calculatedClass]"></div>
    <div class="cuadro" :style="[calculatedStyle, {height: widthInput + 'px'}]"></div>
  </div>

  <div>
    <h5>Controles</h5>
    <div>
      <button @click="changeColor">Cambiar color</button>
    </div>
    <div>
      <input type="text" v-model="classInput">
    </div>
    <div>
      <label for="color-style">Color style:</label>
      <input type="text" v-model="colorInput" id="color-style">
      <br>
      <input type="text" v-model="widthInput">
    </div>
  </div>
  <hr>
  <h1 v-resaltar="{color:'yellow', colorTexto: 'red'}">Texto resaltado</h1>
  <h1 v-resaltar:invertido.retraso.parpadear="{color:'yellow', colorTexto: 'red', retraso: 5000, colorAlterno: 'coral'}">Texto resaltado</h1>
</div>
</template>

<script>
export default {
  data() {
    return {
      muestraclase: true,
      classInput: 'verde',
      colorInput: 'orange',
      widthInput: 100
    };
  },
  methods: {
    changeColor() {
      this.muestraclase = !this.muestraclase;
    }
  },
  watch: {},
  computed: {
    calculatedClass() {
      return { rojo: this.muestraclase, azul: !this.muestraclase };
    },
    calculatedStyle() {
      return {
        backgroundColor: this.colorInput,
        width: this.widthInput + 'px'
      };
    }
  }
};
</script>

<style lang="scss">
div.contenedor {
  display: flex;
  flex-flow: row wrap;
}
div.cuadro {
  background-color: gray;
  display: inline-block;
  height: 100px;
  margin: 10px;
  width: 100px;
}
div.rojo {
  background-color: red;
}
div.azul {
  background-color: blue;
}
div.verde {
  background-color: green;
}
div.morado {
  background-color: purple;
}
</style>
