import Home from "../views/home/Home.vue";
import Faq from "../views/faq/Faq.vue";
import Tentang from "../views/tentang/Tentang.vue";
import Kontak from "../views/kontak/Kontak.vue";
import Blog from "../views/blog/Blog.vue";
import DetailBlog from "../views/blog/Detail_Blog.vue";
import Daftar from "../views/auth/Daftar.vue";
import Login from "../views/auth/Login.vue";
import Forgot from "../views/auth/Forgot.vue";
import Verify from "../views/auth/Verify.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/blog/:slug",
      name: "detailblog",
      component: DetailBlog,
      props: true
    },
    {
      path: "/tentang-kooyla",
      name: "Tentang",
      component: Tentang,
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq,
    },
    {
      path: "/kontak",
      name: "Kontak",
      component: Kontak,
    },
    {
      path: "/daftar",
      name: "Daftar",
      component: Daftar,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/forgot",
      name: "Forgot",
      component: Forgot,
    },
    {
      path: "/verify",
      name: "Verify",
      component: Verify,
    },
  ];
  

export default routes.map(route => {
  const meta = {
    public: true,
    onlyLoggedOut: true
  }
  return { ...route, meta }
})