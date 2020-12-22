<template>
  <div class="tab-content">
    <div class="wideget-user-tab">
      <div class="tab-menu-heading">
        <div class="tabs-menu1">
          <TabMenu/>
          <KomunitasPage/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabMenu from '@/components/profile/tab/Tab.vue'
import KomunitasPage from '@/components/profile/contenTab/Komunitas.vue'

export default {
  components: {
    TabMenu,
    KomunitasPage
  }
}
</script>

