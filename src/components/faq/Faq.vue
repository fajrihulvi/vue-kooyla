<template>
  <section class="sptb">
    <div class="container">
      <div class="panel-group1" id="accordion2">
        <div v-if="isLoaded">
        <div
          class="panel panel-primary mb-4 border p-0"
          v-for="(faq, index) in faqs"
          :key="faq.id"
        >
          <div class="panel-heading1">
            <h4 class="panel-title1">
              <a
                class="accordion-toggle collapsed"
                data-toggle="collapse"
                data-parent="#accordion2"
                v-bind:href="'#collapse' + index"
                aria-expanded="false"
                >{{ index + 1 }}. {{ faq.judul }}</a
              >
            </h4>
          </div>
          <div
            :id="'collapse'+index"
            class="panel-collapse collapse active"
            role="tabpanel"
            aria-expanded="false"
          >
            <div class="panel-body bg-blue">
              <p style="text-align:justify">
                {{ faq.deskripsi }}
              </p>
            </div>
          </div>
        </div>
        </div>
        <div v-else>
          <div id="global-loader">
            <img src="../../assets/images/loader.svg" class="loader-img" alt="">
          </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import { URL_FAQ } from "../../constants";

import axios from "axios";

export default {
  name: "Faq",
  data() {
    return {
      faqs: [],
      toggled: [],
      isLoaded : false,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      let self = this;
      axios
        .get(URL_FAQ)
        .then(function(response) {
          self.isLoaded = true;
          self.faqs = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

  },
};
</script>
