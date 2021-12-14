<template>
  <el-avatar class="avatar" src="https://avatars.githubusercontent.com/u/11775487?v=4" />
  <!-- <el-avatar :src="informations.avatar_url" /> -->
</template>

<script>
import { ElAvatar } from 'element-plus'

export default {
  name: 'NavBar',

  components: {
    ElAvatar,
  },

  setup() {
    //
  }
}
</script>

<style scoped>
.avatar{
  float: right;
  margin: 5px;
  border: 2px solid #111827;
}
</style>
