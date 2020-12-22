<template>
  <section class="sptb">
    <div class="container">
      <div class="row ">
        <div class="col-lg-12 col-md-12 col-md-12">
          <div class="card">
            <div class="card-header ">
              <h3 class="card-title">
                Silahkan Masukkan Data Berikut Ini Dengan Valid
              </h3>
            </div>
            <div class="card-body">
              <form action="#">
                <div class="form-group">
                  <label class="form-label text-dark">Nama Lengkap</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nama"
                    v-model="nama"
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
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
                <div class="form-group">
                  <label class="form-label text-dark">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <span v-if="msg.checkuser" class="text-danger">{{
                  msg.checkuser
                }}</span>
                <div class="form-group">
                  <label class="form-label text-dark">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <span v-if="msg.password" class="text-danger">{{
                  msg.password
                }}</span>
                <div class="form-group">
                  <label class="form-label text-dark">Konfirmai Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="konfirmasi"
                    v-model="konfirmasi"
                    placeholder="Konfirmai Password"
                    required
                  />
                </div>
                <span v-if="msg.konf" class="text-danger">{{ msg.konf }}</span>
              </form>
            </div>
            <div v-if="loading">
              <center><img src="../../assets/images/loader.svg" /></center>
            </div>
            <div class="card-footer bg-light-50" v-else>
              <input
                type="submit"
                @click="actDaftar"
                :disabled="btnSave"
                class="btn btn-primary btn-block"
                value="Simpan"
              />
              <br/> 
              <center>
                <p class="text-dark mb-0">
                  Sudah punya akun ?<a href="/login" class="text-primary ml-1"
                    >Login Disini</a
                  >
                </p>
                </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { URL_USER, URL_DAFTAR } from "../../constants";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "daftar",
  data() {
    return {
      msg: [],
      btnSave: false,
      loading: false,
      nama: "",
      email: "",
      username: "",
      password: "",
      konfirmasi: "",
    };
  },
  watch: {
    username(value) {
      this.username = value;
      this.checkUsername(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
    konfirmasi(value) {
      this.konfirmasi = value;
      this.konfirmasiPassword(value);
    },
  },
  methods: {
    actDaftar() {
      let self = this;
      self.loading = true;
      const body = {
        name: self.nama,
        email: self.email,
        role: 1,
        password: self.password,
        status: 1,
        username: self.username,
      };
      self.loading = true;
      axios
        .post(URL_DAFTAR, body)
        .then(function(response) {
          if (response.data.status == "1") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Informasi",
              text: "Data Anda Berhasil Disimpan. Silahkan Login.",
              timer: 1500,
            });
            this.$router.push("/verify");
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Informasi",
              text: "Data Anda Gagal Disimpan.",
              timer: 1000,
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    checkUsername(value) {
      let self = this;
      axios
        .get(URL_USER + value)
        .then(function(response) {
          if (response.data.status == 1) {
            self.msg["checkuser"] =
              "Username Sudah Terdaftar. Harap Menggunakan Username Lain.";
            self.btnSave = true;
          } else {
            self.msg["checkuser"] = "";
            self.btnSave = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    validatePassword(value) {
      let difference = 8 - value.length;
      let self = this;
      if (value.length < 8) {
        self.msg["password"] =
          "Password Harus 8 Karakter. " + difference + " Karakter Lagi.";
        self.btnSave = true;
      } else {
        self.msg["password"] = "";
        self.btnSave = false;
      }
    },
    konfirmasiPassword(value) {
      let self = this;
      if (value == self.password) {
        self.msg["konf"] = "";
        self.btnSave = false;
      } else {
        self.msg["konf"] = "Konfirmasi Password Tidak Sama";
        self.btnSave = true;
      }
    },
  },
};
</script>
