<template>
  <div class="menu">
    <el-avatar src="https://avatars.githubusercontent.com/u/11775487?s=400&u=b866830ab6d64eaa2122aa01773bc2af25886d37&v=4" />
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <router-link to="/">
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>Jiyuuki</span>
        </el-menu-item>
      </router-link>
      <router-link to="/repos">
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>Repos</span>
        </el-menu-item>
      </router-link>
      <router-link to="/who-follow-me">
        <el-menu-item index="4">
          <i class="el-icon-setting" />
          <span>Who follow me</span>
        </el-menu-item>
      </router-link>
      <router-link to="/i-follow">
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
  components: {
    ElMenu,
    ElMenuItem,
    ElAvatar,
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      // console.log(key, keyPath)
    }
    return {
      handleOpen,
      handleClose
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
