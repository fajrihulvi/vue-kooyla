<template>
    <MenuPage/>
    <HeaderPage/>
    <FaqPage/>
</template>
<script>
import MenuPage from "@/views/template/Menu"
import HeaderPage from '@/components/faq/Header.vue'
import FaqPage from '@/components/faq/Faq.vue'

export default {
  name: 'Home',
  components: {
    MenuPage,
    HeaderPage,
    FaqPage
  }
}
</script>
