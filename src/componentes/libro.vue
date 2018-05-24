<template>
  <div class="libro">
    <h3>
      <slot name="titulo">
        Titulo por defecto
      </slot>
    </h3>
    <hr>
    <slot name="contenido"></slot>
  </div>
</template>

<script>
export default {
  // props: {
  //   titulo: {
  //     type: String
  //   },
  //   subtitulo: {
  //     type: String
  //   },
  //   resumen: {
  //     type: String
  //   }
  // }
};
</script>

<style scoped lang="scss">
</style>
