<template>
  <div class="card">
    <div class="card-header ">
      <h3 class="card-title">
        <center>Tes Minat</center>
      </h3>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12" v-for="m in 30" :key="m">
          <a href="#" class="text-dark"
            ><h4 class="font-weight-semibold mb-3">
              Apakah anda seorang pramuniaga ?
            </h4></a
          >
          <div class="custom-controls-stacked d-md-flex">
            <label
              class="custom-control custom-radio mr-4"
              v-for="n in 6"
              :key="n"
            >
              <input
                type="radio"
                class="custom-control-input"
                :name="m"
                :value="n"
                checked
              />
              <span class="custom-control-label">{{ n }}</span>
            </label>
          </div>
          <hr />
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block">
        Simpan
      </button>
    </div>
  </div>
</template>
