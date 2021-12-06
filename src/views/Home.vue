<template>
  <Info v-if="infos.login" :infos="infos" />
</template>

<script>
import Info from '@/components/Info.vue'
import InfoService from '/services/GitHubApiService.js'
import { onMounted, ref } from 'vue'
export default {
  name: 'Home',
  components: {
    Info
  },
  setup() {
    const infos = ref({})
    const getInfo = () => {
      InfoService.getInfo().then((response) => {
        infos.value = response.data
      }).catch((error) => {
        return console.log(error)
      })
    }
    onMounted(() => {
      console.log('in mounted!')
      getInfo()
    })
    return {
      infos
    }
  }
}
</script>
<style scoped></style>
