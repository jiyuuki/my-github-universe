<template>
  <el-avatar class="avatar" :src="informations.avatar_url" />
  <SearchInput :placeholder="placeholder" :style-search-input="styleSearchInput" />
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'

export default {
  name: 'NavBar',

  props: {
    informations: {
      type: Object,
      required: true
    }
  },

  components: {
    SearchInput,
  },

  setup() {
    const placeholder = 'Type another username'

    const styleSearchInput = {
      width: '20%',
      margin: '5px 0px 5px 5px',
      float: 'left',
      marginTop: '5px',
    }

    return {
      placeholder,
      styleSearchInput
    }
  }
}
</script>

<style scoped>
.avatar{
  float: right;
  margin: 5px;
  border: 2px solid #f9fafb;
}
</style>
