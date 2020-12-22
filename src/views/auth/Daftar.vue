<template>
    <Header></Header>
    <DaftarPage></DaftarPage>
</template>
<script>
import Header from '@/components/auth/Header.vue'
import DaftarPage from '@/components/auth/Daftar.vue'

export default {
  name: 'Daftar',
  components: {
    Header,
    DaftarPage
  }
}
</script>
