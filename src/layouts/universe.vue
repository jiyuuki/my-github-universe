<template>
  <div>
    <h1>univers Layout</h1>
    <el-container>
      <el-aside width="200px">
        <NavBar :informations="informations" />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view :informations="informations" />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { ElContainer, ElAside, ElMain, ElHeader, ElFooter } from 'element-plus'
import NavBar from '@/components/layouts/NavBar.vue'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import InformationService from '../../services/ApiService'

export default {
  name: 'UniverseLayout',

  components: {
    ElContainer,
    ElAside,
    ElMain,
    Header,
    NavBar,
    Footer,
    ElHeader,
    ElFooter,
  },

  setup() {
    const informations = ref({})
    const getInformation = () => {
      InformationService.getInformation().then((response) => {
        informations.value = response.data
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        //
      })
    }
    onMounted(() => {
      alert
      console.log({ informations })
      getInformation()
    })
    return {
      informations,
      getInformation
    }
  }
}
</script>

<style scoped></style>
