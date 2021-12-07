<template>
  <div>
    <el-col :span="6" class="copyright">
      <span>© 2021 Salma EL HAJRAOUI, </span>
      👾
    </el-col>
    <el-col :span="6">
      <el-button
        @click="emitEventRun"
        type="primary"
        round
      >
        Run
      </el-button>
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
import { inject } from 'vue'
import { ElButton } from 'element-plus'
export default {
  name: 'Footer',
  components: {
    ElButton
  },
  setup() {
    const emitter = inject('emitter')
    const emitEventRun = () => {
      emitter.emit('changestring', 'ruuuuuuuuuuuuun')
    }
    return {
      emitEventRun
    }
  }
}
</script>
<style scoped></style>
