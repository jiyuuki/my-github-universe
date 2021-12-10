<template>
  <el-row>
    <el-col :span="12">
      Ex consectetur excepteur consectetur ut eu dolor excepteur culpa. Velit adipisicing laborum quis ea aute. Ullamco tempor duis esse laborum proident aute. Ex et minim minim nostrud sit eu consequat sint labore pariatur amet. Amet laboris exercitation irure Lorem ea do veniam anim aliquip id proident sit adipisicing amet.
    </el-col>
    <el-col :span="12">
      <el-input
        @keyup.enter="searchUniverse"
        v-model="username"
        placeholder="Please enter your username"
      />
    </el-col>
  </el-row>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Search',

  setup() {
    const username = ref('')

    const searchUniverse = () => {
      console.log({ username: username.value })
    }
    return {
      username,
      searchUniverse
    }
  }
}
</script>
