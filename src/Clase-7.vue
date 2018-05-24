<template>
    <div>
      <h1>{{ titulo | upper | lower }}</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Filtros y mixins"
    }
  }, 
  filters: {
    upper(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

