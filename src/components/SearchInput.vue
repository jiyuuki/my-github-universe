<template>
  <el-button v-show="false" plain @click="errorNotification" />
  <el-row :gutter="2">
    <el-input
      ref="refInput"
      v-model="search"
      @keyup.enter.prevent="searchUniverse"
      :placeholder="placeholder"
      :prefix-icon="Search"
      :input-style="styleSearchInput"
    />
  </el-row>
  <h1>{{ }}</h1>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

export default {
  name: 'SearchInput',

  props: {
    placeholder: {
      type: String,
      required: true
    },
    styleSearchInput: {
      type: Object,
      default: null
    }
  },

  setup() {
    const store = useStore()
    const router = useRouter()

    const errorNotification = (error) => {
      if (error === null) return false
      ElNotification({
        title: 'Error',
        message: error,
        type: 'error',
      })
    }
    const refInput = ref(null)
    const search = ref('')

    const searchUniverse = async() => {
      try {
        const searchValue = search.value.trim().toLowerCase()
        await store.dispatch('loadInformations', searchValue)
        router.push({
          name: 'Universe',
          params: { username: searchValue }
        })
      } catch (error) {
        errorNotification(error.message)
      }
    }

    onMounted(() => {
      refInput.value.focus()
    })
    return {
      refInput,
      search,
      Search,
      searchUniverse,
      errorNotification,
    }
  }
}
</script>
