<template>
    <div class="card">
      <div class="item-user">
        <div class="profile-pic mb-0">
          <img src="@/assets/images/us_flag.jpg" class="w-100" alt="user" />
        </div>
      </div>
      <div class="card-body item-user">
        <div class="ml-1">
          <h4 class="mt-1 mb-3 font-weight-bold">
            {{ token }}
          </h4>
          <span class="mb-3 text-primary">....</span><br />
          <div class="rating-stars d-inline-flex mb-2 mr-3">
            <input
              type="number"
              readonly="readonly"
              class="rating-value star"
              name="rating-stars-value"
              value="4"
            />
            <div class="rating-stars-container mr-2">
              <div class="rating-star sm"><i class="fa fa-star"></i></div>
              <div class="rating-star sm"><i class="fa fa-star"></i></div>
              <div class="rating-star sm"><i class="fa fa-star"></i></div>
              <div class="rating-star sm"><i class="fa fa-star"></i></div>
              <div class="rating-star sm"><i class="fa fa-star"></i></div>
            </div>
          </div>
          <h6 class="mt-2 mb-0">
            <a href="#" class="btn btn-secondary btn-sm">10 Artikel</a>
            &nbsp;
            <a href="#" class="btn btn-success btn-sm">2 Komunitas</a>
          </h6>
        </div>
      </div>
      <div class="card-body item-user">
        <h4 class="mb-4">Contact Info</h4>
        <div>
          <h6>
            <span class="font-weight-semibold"
              ><i class="fa fa-envelope mr-3 mb-2"></i></span
            ><a href="#" class="text-body"> alfajrihulvi14@gmail.com</a>
          </h6>
          <h6>
            <span class="font-weight-semibold"
              ><i class="fa fa-phone mr-3  mb-2"></i></span
            ><a href="#" class="text-primary">+62889 2970 567</a>
          </h6>
          <h6>
            <span class="font-weight-semibold"
              ><i class="fa fa-link mr-3 "></i></span
            ><a href="#" class="text-primary">http://fajri-hulvi.com/</a>
          </h6>
        </div>
        <div class=" item-user-icons mt-4">
          <a href="#" class="facebook-bg mt-0"
            ><i class="fa fa-facebook"></i
          ></a>
          &nbsp;
          <a href="#" class="dribbble-bg"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Daftar Komunitas</h3>
      </div>
      <div class="card-body"></div>
    </div>
</template>
<script>
import { URL_PROFIL_BY_ID } from "../../constants";

import axios from "axios";

export default {
  data() {
    return {
      profile : [],
      id: localStorage.getItem("id-user") || null, 
      token: localStorage.getItem("token") || null,
    };
  },
  created() {
    this.getAuth()
  },
  methods: {
    getAuth() {
      let axiosConfig = {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      };
      axios
        .get(URL_PROFIL_BY_ID + this.id , axiosConfig)
        .then((response) => {
          this.profile = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
