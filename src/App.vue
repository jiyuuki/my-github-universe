<template>
  <el-container>
    <el-aside width="200px">
      <NavBar />
    </el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main><router-view /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </el-container>
</template>
<script>
// import { ref, computed, watch } from 'vue'
import { ElContainer, ElAside, ElMain, ElHeader, ElFooter } from 'element-plus'
import NavBar from '@/components/layouts/NavBar.vue'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'

export default {
  name: 'App',
  components: {
    ElContainer,
    ElAside,
    ElMain,
    Header,
    NavBar,
    Footer,
    ElHeader,
    ElFooter,
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
.el-header {
  background-color: #fff;
  color: #35495e;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #fff;
  color: #35495e;
  text-align: center;
  line-height: 60px;
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
.el-col {
  border-radius: 4px;
}
</style>
