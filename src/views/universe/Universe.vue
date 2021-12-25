<template>
  <InfoRepository :informations="informations" />
</template>

<script>
import InfoRepository from '@/components/InfoRepository.vue'

export default {
  name: 'Universe',

  props: {
    informations: {
      type: Object,
      required: true
    }
  },

  components: {
    InfoRepository
  }
}
</script>
