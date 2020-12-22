<template>
  <div class="header-main">
    <!-- Mobile Header -->
    <div class="sticky">
      <div class="horizontal-header clearfix ">
        <div class="container">
          <a id="horizontal-navtoggle" class="animated-arrow"><span></span></a>
          <span class="smllogo">
            <img src="../../assets/logo.png" width="70px" alt="img" />
          </span>
        </div>
      </div>
    </div>
    <!-- /Mobile Header -->
    <div class="horizontal-main clearfix">
      <div class="horizontal-mainwrapper container clearfix">
        <div class="desktoplogo">
          <a href="/"
            ><img src="../../assets/logo.png" style="width: 100px"
          /></a>
        </div>
        <div class="desktoplogo-1">
          <a href="/"><img src="../../assets/logo.png" width="100px"/></a>
        </div>
        <nav class="horizontalMenu clearfix d-md-flex" v-if="!token">
          <ul class="horizontalMenu-list">
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li>
              <a href="#"
                >Tentang Kami <span class="fa fa-caret-down m-0"></span
              ></a>
              <ul class="sub-menu">
                <li><a href="/tentang-kooyla">Tentang Kooyla</a></li>
                <li><a href="#">Karir</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/kontak">Hubungi Kami</a></li>
              </ul>
            </li>
            <li class="pt-0 pb-2 mt-lg-0 create-submit-btn">
              <span
                ><a class="btn btn-secondary" href="/daftar"
                  ><i class="fa fa-users"></i> Daftar</a
                ></span
              >
            </li>
            <li class="mt-0 pt-0  pb-5 mt-lg-0 create-resume-btn">
              <span
                ><a
                  class="btn btn-info"
                  href="/login"
                  ><i class="fa fa-sign-in"></i> Masuk</a
                ></span
              >
            </li>
          </ul>
        </nav>
        <nav v-else class="horizontalMenu clearfix d-md-flex">
          <ul class="horizontalMenu-list">
            <li>
              <a href="#">Profile <span class="fa fa-caret-down m-0"></span></a>
              <ul class="sub-menu">
                <li><a href="#" @click="logout">Logout</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      token: localStorage.getItem("token") || null,
    };
  },

  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("id-user");
      this.$router.push("/");
    },
  },
};
</script>
