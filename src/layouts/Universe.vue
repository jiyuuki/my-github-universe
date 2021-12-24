<template>
  <el-container class="h-screen">
    <el-aside width="200px">
      <SideBar :informations="informations" />
    </el-aside>
    <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <router-view :informations="informations" />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted, computed, ref } from 'vue'
import SideBar from '@/components/layouts/SideBar.vue'
import NavBar from '@/components/layouts/NavBar.vue'
import Footer from '@/components/layouts/Footer.vue'

export default {
  name: 'UniverseLayout',
  props: {
    username: {
      type: String,
      required: true
    }
  },
  components: {
    NavBar,
    SideBar,
    Footer,
  },

  setup(props) {
    const loader = ref(true)
    const router = useRouter()
    const store = useStore()

    const loadInformations = async() => {
      try {
        await store.dispatch('loadInformations', props.username)
        loader.value = false
        // add UI for this loader
      } catch (error) {
        router.push({
          name: 'Search',
          params: { error: error.message }
        })
      }
    }
    onMounted(() => {
      loadInformations()
    })

    const informations = computed(() => {
      return store.getters['getInformations']
    })

    return {
      informations,
    }
  }
}
</script>

<style>
.el-aside {
  background-color: #111827;
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

.el-menu {
  background-color: #35495e;
  width: 201px;
}
.menu {
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
  background-color: #f4f6f7;
  color: #35495e;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #f4f6f7;
  color: #35495e;
  text-align: center;
  line-height: 50px;
  font-size: 10px;
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
