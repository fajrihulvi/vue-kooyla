<template>
  <section class="sptb">
    <center><h1><b>Masuk Ke Kooyla</b></h1></center>
    <br/>
    <div class="container" style="width:50%">
      <div class="row ">
        <div class="col-lg-12 col-md-12 col-md-12">
          <div class="card">
            <div class="card-header ">
              <h3 class="card-title">
                <center>Masuk dengan akun yang terdaftar di Kooyla</center>
              </h3>
            </div>
            <form @submit.prevent="actLogin">
              <div id="login" class="card-body" tabindex="500">
                <div v-if="msg.gagal" class="alert alert-danger">
                  {{ msg.gagal }}
                </div>
                <div class="row">
                  <div class="col-lg-12 col-sm-12">
                    <div class="form-group">
                     <label class="form-label">Email</label>
                      <input type="email" v-model="email" required class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-11 col-sm-11">
                    <div class="form-group">
                      <label class="form-label">Password</label>
                      <input :type="type" v-model="password" required class="form-control" />
                      <br />
                      <span v-if="msg.password" class="text-danger">{{
                        msg.password
                      }}</span>
                    </div>
                  </div>
                  <div class="col-lg-1 col-sm-1">
                    <br/>
                    <a href="#" class="btn btn-success" @click="showPassword"
                      ><i :class="icon"></i
                    ></a>
                  </div>
                </div>
                <div class="submit">
                  <div v-if="isLoaded">
                    <center><img src="@/assets/images/loader.svg" /></center>
                  </div>
                  <div v-else>
                    <button
                      type="submit"
                      :disabled="btnSave"
                      class="btn btn-primary btn-block"
                    >
                      Masuk
                    </button>
                  </div>
                </div>
                <br />
                <center>
                <p class="mb-2">
                  <a href="/forgot">Lupa Password</a>
                </p>
                <p class="text-dark mb-0">
                  Belum punya akun ?<a href="/daftar" class="text-primary ml-1"
                    >Daftar Disini</a
                  >
                </p>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { URL_LOGIN } from "../../constants";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      msg: [],
      btnSave: false,
      isLoaded: false,
      type: "password",
      icon: "fa fa-eye",
      email: "",
      password: "",
      token: localStorage.getItem("token") || null,
    };
  },
  watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("id-user");
      this.$router.push("/");
    },
    actLogin() {
      let self = this;
      self.isLoaded = true;
      const login = { email: this.email, password: this.password };
      axios
        .post(URL_LOGIN, login)
        .then((response) => {
          if (response.data.status == "1") {
            self.msg["gagal"] = false;
            localStorage.setItem("id-user", response.data.data.id);
            localStorage.setItem("token", response.data.data.api_token);
            this.$router.replace({ name: "Profile" });
          } else {
            self.msg["gagal"] = "Email dan Password Tidak Valid.";
          }
          self.isLoaded = false;
        })
        .catch((err) => {
          self.msg["gagal"] = "Email dan Password Tidak Valid.";
          localStorage.removeItem("token");
          self.isLoaded = false;
          console.log(err);
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
    showPassword() {
      if (this.type == "password") {
        this.type = "text";
        this.icon = "fa fa-eye-slash";
      } else {
        this.type = "password";
        this.icon = "fa fa-eye";
      }
    },
  },
};
</script>
