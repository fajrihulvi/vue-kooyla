<template>
    <MenuPage/>
    <HeaderPage/>
    <BlogPage/>
</template>
<script>
import MenuPage from "@/views/template/Menu"
import HeaderPage from '@/components/blog/Header.vue'
import BlogPage from '@/components/blog/Blog.vue'

export default {
  name: 'Blog',
  components: {
    MenuPage,
    HeaderPage,
    BlogPage
  }
}
</script>
