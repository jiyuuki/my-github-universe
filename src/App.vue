<template>
  <el-container>
    <el-aside width="200px">
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
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main><router-view /></el-main>
      <el-footer>
        <el-col :span="12" class="copyright">
          <span>© 2021 Salma EL HAJRAOUI, </span>
          👾
        </el-col>
        <el-col :span="12" class="social-media">
          Say Hi on
          <a target="_blank" href="https://twitter.com/SalmaElHajraoui">
            Twitter
          </a>
          or
          <a target="_blank" href="https://www.linkedin.com/in/elhajraoui">
            Linkdin
          </a>
        </el-col>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
// import { ref, computed, watch } from 'vue'
import { ElContainer, ElAside, ElMenu, ElMenuItem, ElHeader, ElMain, ElFooter, ElAvatar } from 'element-plus'
export default {
  name: 'App',
  components: {
    ElContainer,
    ElAside,
    ElMenu,
    ElMenuItem,
    ElHeader,
    ElMain,
    ElFooter,
    ElAvatar,
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      handleOpen,
      handleClose
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0;
  min-height: 793px;
}
a {
  cursor: pointer;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header, .el-footer {
  background-color: #fff;
  color: #35495e;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  font-size: 12px;
}
.social-media {
  float: right;
  font-weight: bold;
}
.social-media a {
  color: #6f58bb
}
.copyright span {
  font-weight: bold;
}
.el-aside {
  background-color: #35495e;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
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
