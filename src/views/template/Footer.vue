<template>
  <!--Footer Section-->
  <section class="main-footer">
    <footer
      class="bg-blue text-white cover-image"
      data-image-src="../../assets/images/banners/banner3.jpg"
    >
      <div class="footer-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-12">
              <img src="../../assets/logo.png" style="width: 140px">
              <br/><br/>
              <h6 class="mb-2">Hubungi Kami</h6>
              <hr
                class="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
                <ul class="list-unstyled mb-0">
                <li><a href="http://wa.me/62-89649810015" target="_blank"><i class="fa fa-phone"></i> +62-896-4981-0015</a></li>
                <li><a href="mailto:cs@kooyla.com"><i class="fa fa-envelope"></i> cs@kooyla.com</a></li>
                <li><a href="#"><i class="fa fa-map-marker"></i> City Resort Apartment, Blok G No. 6B Jakarta Barat, 11730.</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-12">
              <h6>Job Type</h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
              <ul class="list-unstyled mb-0">
                <li><a href="#">Work from home</a></li>
                <li><a href="#">Internship</a></li>
                <li><a href="#">Part time</a></li>
                <li><a href="#">Full time</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-12">
              <h6>Resources</h6>
              <hr
                class="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
              <ul class="list-unstyled mb-0">
                <li><a href="#">Support</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Contact Details</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-12">
              <h6>Popular Ads</h6>
              <hr
                class="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#"
                    ><i class="fa fa-caret-right text-white-50"></i> Educational
                    college Ads</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-caret-right text-white-50"></i> Free Lancer
                    for Web Developer</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-caret-right text-white-50"></i> Searching
                    for Developer</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-caret-right text-white-50"></i> BPO Online
                    In Bangalore</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-12">
              <h6 class="mb-2">Download Kooyla Apps</h6>
              <hr
                class="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto"
              />
              <br />
              <a href="#" v-on:click="btnPlaystore"><img src="../../assets/ps.png" style="width:200px" /></a>
              <br/><br/>
              <a href="#" v-on:click="btnPlaystore"><img src="../../assets/as.png" style="width:200px" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-white-50 border-top p-0">
        <div class="container">
          <div class="row d-flex">
            <div class="col-lg-8 col-sm-12  mt-2 mb-2 text-left ">
              Copyright © 2020 kooyla.com
            </div>
            <div class="col-lg-4 col-sm-12 ml-auto mb-2 mt-2 d-none d-lg-block">
              <ul class="social mb-0">
                <li>
                  <a class="social-icon" href=""
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a class="social-icon" href=""
                    ><i class="fa fa-youtube"></i
                  ></a>
                </li>
                <li>
                  <a class="social-icon" href=""
                    ><i class="fa fa-linkedin"></i
                  ></a>
                </li>
                <li>
                  <a class="social-icon" href=""
                    ><i class="fa fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
  <!--Footer Section-->
</template>
<script>
export default {
  data: function() {
      return {
          
      }
  },
  methods: {
    btnPlaystore() {
      alert("Dalam Pengembangan");
    },
  },
};
</script>
