<template>
  <InfoRepository :informations="informations" />
</template>

<script>
import InfoRepository from '@/components/InfoRepository.vue'

export default {
  name: 'Home',
  props: {
    informations: {
      type: Object,
      required: true
    }
  },
  components: {
    InfoRepository
  },
  setup() {
    //
  }
}
</script>
<style scoped></style>
