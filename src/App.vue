<template>
  <router-view />
</template>

<script>
// import { ElContainer } from 'element-plus'

export default {
  name: 'App',

  components: {
    // ElContainer,
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
  height: 100%;
  display: grid;
  overflow: hidden;
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
body > .el-container {
  margin-bottom: 40px;
}
</style>
