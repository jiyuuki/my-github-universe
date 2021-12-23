<template>
  <el-avatar class="avatar" src="https://avatars.githubusercontent.com/u/11775487?v=4" />
  <!-- <el-avatar :src="informations.avatar_url" /> -->
</template>

<script>

export default {
  name: 'NavBar',

  setup() {
    //
  }
}
</script>

<style scoped>
.avatar{
  float: right;
  margin: 5px;
  border: 2px solid #f9fafb;
}
</style>
