<template>
    <section class="sptb">
		<div class="container">
			<div v-if="isLoaded">
			<div class="row">
				<div class="d-block mx-auto col-lg-8 col-md-12">
					<div class="card">
						<div class="card-body">
							<a href="#" class="text-dark"><h1 class="font-weight-semibold">
                                {{judul}}
                            </h1></a>
							<div class="item7-card-desc d-flex mb-2 mt-3">
								<a href="#"><i class="fa fa-calendar-o text-muted mr-2"></i>{{tgl}}</a>
								<a href="#"><i class="fa fa-user text-muted mr-2"></i>{{author}}</a>
								&nbsp;&nbsp;
								<!-- <div class="ml-auto">
									<div class="rating-stars d-inline-flex">
										<input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="0">
										<div class="rating-stars-container mr-2">
											<div class="rating-star sm">
												<i class="fa fa-star"></i>
											</div>
											<div class="rating-star sm">
												<i class="fa fa-star"></i>
											</div>
											<div class="rating-star sm">
												<i class="fa fa-star"></i>
											</div>
											<div class="rating-star sm">
												<i class="fa fa-star"></i>
											</div>
											<div class="rating-star sm">
												<i class="fa fa-star"></i>
											</div>
										</div>
									</div>
								</div> -->
							</div>
							<div class="product-filter-desc">
								<div class="product-filter-icons">
									<a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=https://kooyla.com/blog/'+slug" class="facebook-bg text-center"><i class="fa fa-facebook"></i></a>
									<!-- <a href="#" class="dribbble-bg text-center"><i class="fa fa-instagram"></i></a> -->
									<a target="_blank" :href="'https://api.whatsapp.com/send?text=Halo sahabat kooyla, ada blog menarik dengan judul *' +judul+ '* Penasaran ? Buruan kunjungi link nya berikut : '+link" class="bg-success text-center text-white"><i class="fa fa-whatsapp"></i></a>
									<a href="#" class="twitter-bg text-center"><i class="fa fa-twitter"></i></a>
									<a href="#" class="twitter-bg text-center"><i class="fa fa-linkedin"></i></a>
								</div>
							</div>
							<br/>
							<div class="item7-card-img">
								<img :src="'https://staging.kooyla.com/images/' +image" alt="img" class="w-100">
							</div>
							<br/>
							<p class="text-justify">
                                <span v-html="deskripsi"></span>
                            </p>
							<div class="product-filter-desc">
								<div class="product-filter-icons">
									<a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=https://kooyla.com/blog/'+slug" class="facebook-bg text-center"><i class="fa fa-facebook"></i></a>
									<!-- <a href="#" class="dribbble-bg text-center"><i class="fa fa-instagram"></i></a> -->
									<a target="_blank" :href="'https://api.whatsapp.com/send?text=Halo sahabat kooyla, ada blog menarik dengan judul *' +judul+ '* Penasaran ? Buruan kunjungi link nya berikut : '+link" class="bg-success text-center text-white"><i class="fa fa-whatsapp"></i></a>
									<a target="_blank" :href="'https://twitter.com/intent/tweet?url=https://kooyla.com/blog/'+slug+'&text=Halo sahabat kooyla, ada blog menarik dengan judul '+judul+ ' Penasaran ? Buruan kunjungi link berikut :'" class="twitter-bg text-center"><i class="fa fa-twitter"></i></a>
									<a target="_blank" :href="'https://www.linkedin.com/shareArticle?mini=true&url=http://kooyla.com&ti  tle='+judul" class="twitter-bg text-center"><i class="fa fa-linkedin"></i></a>
								</div>
							</div>
							<br/>
							<h4><b>Tags</b></h4>
							<div class="product-tags clearfix">
								<ul class="list-unstyled mb-0">
									<li v-for="tag in tags" :key="tag.id"><a href="#">{{tag.category}}</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- <div class="card mb-0">
						<div class="card-header">
							<h3 class="card-title">Tulis Komentar</h3>
						</div>
						<div class="card-body">
							<div class="form-group">
								<textarea class="form-control" name="example-textarea-input" rows="6" placeholder="Tulis Komentar"></textarea>
							</div>
							<a href="#" class="btn btn-primary">Kirim</a>
						</div>
					</div> -->
				</div>
			</div>
			</div>
			<div v-else>
				<div id="global-loader">
					<img src="../../assets/images/loader.svg" class="loader-img" alt="">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { DETAIL_BLOG, URL } from "../../constants";

import axios from "axios";

export default {
  name: "Blog",
  data() {
    return {
      judul: "",
      tgl : "",
      author : "",
      deskripsi : "",
      tags : [],
      image : "",
      link : "",
      slug : "",
      isLoaded : false,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      let self = this;
      axios
        .get(DETAIL_BLOG + this.$route.params.slug)
        .then(function(response) {
			self.isLoaded = true;
          self.judul = response.data.data.judul;
          self.tgl = response.data.data.createds_at;
          self.author = response.data.data.author_name;
          self.deskripsi = response.data.data.deskripsi;
          self.tags = response.data.data.kategori;
          self.image = response.data.data.image;
          self.link = URL +'blog/'+ response.data.data.slug;
          self.slug = response.data.data.slug;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
