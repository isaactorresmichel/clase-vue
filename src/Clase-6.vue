<template>
    <div>
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
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
</style>

