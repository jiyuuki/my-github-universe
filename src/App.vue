<template>
  <router-view />
</template>
<script>

export default {
  name: 'App',

  components: {
    //
  },

  setup() {
    //
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0;
  min-height: 793px;
  height: 100%;
  display: grid;
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
  height: 100%;
  display: grid;
}

.el-aside {
  background-color: #35495e;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: #fff; */
  background-color: #f4f6f7;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
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
