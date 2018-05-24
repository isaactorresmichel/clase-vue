<template>
  <div class="libreria">
    <h3>
      <slot name="libreria">
        Librería por defecto
      </slot>
      <strong>{{contador}}</strong>

      <button @click="contador++">Me gusta <i class="fa fa-thumbs-up"></i></button>
    </h3>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 1
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

