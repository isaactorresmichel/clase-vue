<template>
  <div>
    <h1>Rutas</h1>
    <ul>
      <router-link to="/" active-class="activo" tag="li" exact>Home</router-link>
      <router-link to="/usuario" active-class="activo" tag="li">Administración de usuarios</router-link>      
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }, 
}
</script>

<style lang="scss" scoped>
  li {
    cursor: pointer;
  }
  li.activo {
    background-color: red;
  }
</style>

