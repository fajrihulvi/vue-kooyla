<template>
  <MenuPage />
  <section class="sptb">
    <div class="container">
      <Notif />
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-12">
          <SidePage />
        </div>
        <div class="col-xl-9 col-lg-8 col-md-12">
          <Content />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MenuPage from "@/views/template/Menu";
import SidePage from "@/components/profile/SideContent.vue";
import Content from "@/components/profile/Content.vue";
import Notif from "@/components/profile/Notif.vue";

export default {
  name: "Home",
  components: {
    MenuPage,
    SidePage,
    Content,
    Notif,
  },
};
</script>
