<template>
  <section>
    <div
      class="bannerimg cover-image bg-background3"
      data-image-src="../../assets/images/banners/banner2.jpg"
    >
      <div class="header-text mb-0">
        <div class="container">
          <div class="text-center text-white">
            <h1>Verifikasi Email</h1>
            <ol class="breadcrumb text-center">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Verifikasi Email</a></li>
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
                Silahkan Masukkan Kode Yang Ada Pada Email Anda. Perhatikan Case-Sensitive.
              </h3>
            </div>
            <div class="card-body">
              <div class="row ">
                <div class="col-lg-3 col-md-3 col-md-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="kode1"
                      v-model="kode1"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-md-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="kode2"
                      v-model="kode2"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-md-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="kode3"
                      v-model="kode3"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-md-3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="kode4"
                      v-model="kode4"
                      required
                    />
                  </div>
                </div>
              </div>
              <p class="mb-2">
                  <b><a href="#" @click="sendCode" class="text-primary"
                    >Kirim Kode</a
                  ></b> Jika Tidak Mendapatkan Kode.
                </p>
            </div>
            <div class="card-footer bg-light-50">
              <input
                type="submit"
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
export default {
    data(){
        return {
            kode1 : "",
            kode2 : "",
            kode3 : "",
            kode4 : "",
        }
    },
    methods :{
        sendCode(){
            alert(this.kode1+this.kode2+this.kode3+this.kode4);
        }
    }
};
</script>
