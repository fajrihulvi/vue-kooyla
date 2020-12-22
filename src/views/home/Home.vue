<template>
    <MenuPage/>
    <HeaderPage/>
    <FooterPage/>
</template>
<script>
import MenuPage from "@/views/template/Menu";
import HeaderPage from '@/components/home/Header.vue'
import FooterPage from "@/views/template/Footer";

export default {
  name: 'Home',
  components: {
      MenuPage,
      HeaderPage,
      FooterPage,
  }
}
</script>
