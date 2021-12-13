<template>
  <div class="menu">
    <el-avatar :src="informations.avatar_url" />
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <router-link :to="{ name: 'Universe', params: { username: 'jiyuuki'} }">
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>Jiyuuki</span>
        </el-menu-item>
      </router-link>
      <router-link :to="{ name: 'Repositories', params: { username: 'jiyuuki'} }">
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>Repos</span>
        </el-menu-item>
      </router-link>
      <router-link :to="{ name: 'Followers', params: { username: 'jiyuuki'} }">
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>Who follow me</span>
        </el-menu-item>
      </router-link>
      <router-link :to="{ name: 'Following', params: { username: 'jiyuuki'} }">
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>I follow</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
import { ElMenu, ElMenuItem, ElAvatar } from 'element-plus'

export default {
  name: 'NavBar',

  props: {
    informations: {
      type: Object,
      required: true
    }
  },

  components: {
    ElMenu,
    ElMenuItem,
    ElAvatar,
  },

  setup() {
    return {
      //
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
  background-color: #35495e;
  width: 201px;
}
.menu {
  height: 100%;
  overflow: hidden;
}
.el-menu-item.is-active {
  color: var(--el-menu-text-color);
}
.el-menu-item:hover {
  background-color: var(--el-menu-text-color);
  color: #35495e;
}
</style>
