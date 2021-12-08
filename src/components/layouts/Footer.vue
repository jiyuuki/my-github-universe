<template>
  <div>
    <el-col :span="6" class="copyright">
      <span>© 2021 Salma EL HAJRAOUI, </span>
      👾
    </el-col>
    <el-col :span="6" class="social-media">
      Say Hi on
      <a target="_blank" href="https://twitter.com/SalmaElHajraoui">
        Twitter
      </a>
      or
      <a target="_blank" href="https://www.linkedin.com/in/elhajraoui">
        Linkdin
      </a>
    </el-col>
  </div>
</template>

<script>
import { ElButton } from 'element-plus'
export default {
  name: 'Footer',
  components: {
    ElButton
  },
  setup() {
    //
  }
}
</script>
<style scoped></style>
