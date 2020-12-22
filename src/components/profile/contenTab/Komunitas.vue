<template>
  <div class="tab-pane active" id="tab1">
    <div class="card mb-0 border-0">
      <div class="card-body">
        <h3 class="text-dark">
          <b>Komunitas yang sesuai dengan minat kamu</b>
        </h3>
        <br />
        <div class="input-group">
          <input
            type="text"
            class="form-control br-tl-3  br-bl-3"
            v-model="cariblog"
            placeholder="Cari Komunitas"
          />
        </div>
        <br />
        <div class="row">
          <div class="col-lg-12">
            <div
              class="card overflow-hidden br-0 overflow-hidden"
              v-for="n in 4"
              :key="n"
            >
              <div class="d-sm-flex card-body p-3">
                <div class="p-0 m-0 mr-3">
                  <div class="">
                    <a href="jobs.html"></a>
                    <img
                      src="@/assets/images/spain_flag.jpg"
                      alt="img"
                      class="w-9 h-9"
                    />
                  </div>
                </div>
                <div class="item-card9 mt-3 mt-md-5">
                  <a href="company-details.html" class="text-primary"
                    ><h4 class="font-weight-semibold mt-1">
                      Nama Komunitas
                    </h4></a
                  >
                  <div class="rating-stars d-inline-flex">
                    <input
                      type="number"
                      readonly="readonly"
                      class="rating-value star"
                      name="rating-stars-value"
                      value="4"
                    />
                    Sosial
                  </div>
                </div>
                <div class="ml-auto">
                  <a
                    class="btn btn-primary mt-3 mt-md-6 mr-4 font-weight-semibold"
                    href=""
                    ><i class="fa fa-users"></i> 12 Anggota</a
                  >
                </div>
              </div>
              <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                <div class="card-body table-responsive border-top">
                  <table class="table table-borderless w-100 m-0 text-nowrap ">
                    <tbody class="p-0">
                      <tr>
                        <td class="px-0 py-1">
                          <span class="font-weight-semibold">Ketua</span>
                        </td>
                        <td class="p-1"><span>:</span></td>
                        <td class="p-1">
                          <span>Ibnu Salim</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-0 py-1">
                          <span class="font-weight-semibold">Alamat</span>
                        </td>
                        <td class="p-1"><span>:</span></td>
                        <td class="p-1">
                          <span>
                            Jalan Kayu Putih No.x Bukit Sari Gerunggang
                            Pangkalpinang</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="mt-3">
                    <a class="btn btn-light" href="#"
                      ><i class="fa fa-map-marker"></i> Cek Lokasi</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <button type="submit" class="btn btn-primary">
            Selengkapnya
          </button>
        </center>
      </div>
    </div>
  </div>
</template>
