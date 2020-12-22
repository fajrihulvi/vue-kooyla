<template>
    <MenuPage/>
    <HeaderPage/>
    <TentangPage/>
</template>
<script>
import MenuPage from "@/views/template/Menu"
import HeaderPage from '@/components/tentang/Header.vue'
import TentangPage from '@/components/tentang/Tentang.vue'

export default {
  name: 'Home',
  components: {
    MenuPage,
    HeaderPage,
    TentangPage
  }
}
</script>
