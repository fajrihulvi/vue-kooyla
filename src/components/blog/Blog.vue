<template>
  <section class="sptb">
    <div class="container">
      <div class="row">
        <!--Left Side Content-->
        <div class="col-xl-4 col-lg-4 col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control br-tl-3  br-bl-3" v-model="cariblog"
                  placeholder="Pencarian Judul Blog" @keyup="loadData()"
                />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Kategori Blog</h3>
            </div>
            <div class="card-body p-0">
              <div class="list-catergory">
                <div class="item-list">
                  <ul class="list-group mb-0">

                    <li class="list-group-item" v-for="ka in kategori" :key="ka.category">
                      <a href="javascript:void(0)" class="text-dark" @click="bykategori(ka.category)">
                        <i class="fa fa-file bg-primary text-primary"></i>
                        {{ka.category.toUpperCase()}}
                        <span
                          class="badgetext badge badge-pill badge-light mb-0 mt-1"
                          >{{ka.total}}</span
                        >
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--/Left Side Content-->
        <div class="col-xl-8 col-lg-8 col-md-12">
          <!--Job lists-->
          <div v-if="isLoaded">
          <div class="row">
            <div v-if="blogs.length == 0" class="center-block">
              <img src="../../assets/images/products/intro/notification.svg" style="width:250px">
              <br/><br/>
              <h4>Ooopss... Hasil Pencarian Anda Tidak Ditemukan.</h4>
            </div>
            <div
              class="col-xl-12 col-lg-12 col-md-12"
              v-for="blog in blogs"
              :key="blog.id"
              v-else
            >
              <div class="card overflow-hidden">
                <div class="ribbon ribbon-top-left text-warning">
                  <span class="bg-success">Baru</span>
                </div>
                <div class="row no-gutters blog-list">
                  <div class="col-xl-4 col-lg-12 col-md-12">
                    <div class="item7-card-img">
                      <img
                        :src="'https://staging.kooyla.com/images/' + blog.image"
                        alt="img"
                        class="cover-image img-responsive"
                      />
                    </div>
                  </div>
                  <div class="col-xl-8 col-lg-12 col-md-12">
                    <div class="card-body">
                      <div class="item7-card-desc d-flex mb-1">
                        <a href="#"
                          ><i class="fa fa-calendar-o text-muted mr-2"></i
                          >{{ blog.createds_at }}</a
                        >
                        <a href="#"
                          ><i class="fa fa-user text-muted mr-2"></i
                          >{{ blog.author_name }}</a
                        >
                      </div>
                       <router-link
                        :to="{
                          name: 'detailblog',
                          params: { slug: blog.slug },
                        }"
                      ><h4 class="font-weight-bold mb-3 text-primary">
                          {{ blog.judul }}
                        </h4></router-link
                      >
                      <p class="mb-1">
                        <span
                          v-html="blog.deskripsi.substring(0, 200) + '...'"
                        ></span>
                      </p>
                      <router-link
                        :to="{
                          name: 'detailblog',
                          params: { slug: blog.slug },
                        }"
                      >
                        <div class="btn btn-primary btn-sm mt-4">
                          Selengkapnya
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
           <div v-else>
              <div id="global-loader">
            <img src="../../assets/images/loader.svg" class="loader-img" alt="">
          </div>
            </div>
          <div class="center-block text-center"  v-if="blogs.length > 0">
            <button type="button" class="btn btn-primary br-tr-3  br-br-3">
              Tampilkan Selengkapnya
            </button>
          </div>
          <!--/Job lists-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { URL_BLOG, URL_KATEGORI } from "../../constants";

import axios from "axios";
export default {
  name: "Blog",
  data() {
    return {
      blogs: {},
      kategori : {},
      isLoaded : false,
      cariblog: ""
    };
  },
  created() {
    this.loadData();
    this.loadKategori();
  },
  methods: {
    loadData() {
      let self = this;
      axios
        .get(URL_BLOG + this.cariblog)
        .then(function(response) {
          self.isLoaded = true;
          self.blogs = response.data.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    loadKategori() {
      let self = this;
      axios
        .get(URL_KATEGORI)
        .then(function(response) {
          self.kategori = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    // bykategori(kategori) {
    //   let self = this;
    //   axios
    //     .get(URL_BLOG_KATEGORI + kategori)
    //     .then(function(response) {
    //         console.log(response.data.data.data[0].article)
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }
  },
};
</script>
