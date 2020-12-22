<template>
    <MenuPage/>
    <HeaderPage/>
    <KontakPage/>
</template>
<script>
import MenuPage from "@/views/template/Menu"
import HeaderPage from '@/components/kontak/Header.vue'
import KontakPage from '@/components/kontak/Kontak.vue'

export default {
  name: 'Home',
  components: {
    MenuPage,
    HeaderPage,
    KontakPage
  }
}
</script>
