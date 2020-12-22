<template>
  <section>
    <div
      class="bannerimg cover-image bg-background3"
      data-image-src="../../assets/images/banners/banner2.jpg"
    >
      <div class="header-text mb-0">
        <div class="container">
          <div class="text-center text-white">
            <h1>Lupa Password</h1>
            <ol class="breadcrumb text-center">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Lupa Password</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="sptb">
    <div class="container">
      <div class="row ">
        <div class="col-lg-12 col-md-12 col-md-12">
          <div class="card">
            <div class="card-header ">
              <h3 class="card-title text-center">
                Silahkan Masukkan Email Anda Untuk Menggunakan Akun Anda. Kami
                Akan Mengirimkan Link Reset Password Anda.
              </h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  placeholder="Email"
                  required
                />
              </div>
              <span v-if="ket" class="text-danger">{{ ket }}</span>
            </div>
            <div class="card-footer bg-light-50">
              <input
                type="submit"
                @click="actForgot"
                class="btn btn-primary btn-block"
                value="Simpan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { URL_RESET_PASSWORD } from "../../constants";
import axios from "axios";

export default {
  name: "forgot",
  data() {
    return {
      email: "",
      ket: "",
    };
  },
  methods: {
    actForgot() {
      if (this.email != "") {
        const body = { email: this.email };
        axios
          .post(URL_RESET_PASSWORD, body)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        this.ket = "Email Tidak Boleh Kosong";
      }
    },
  },
};
</script>
