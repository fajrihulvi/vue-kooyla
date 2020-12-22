import Profile from "../views/profile/Profile.vue";
import SelfDiscovery from "../views/selfDiscovery/Tes.vue";

const routes = [
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/self-discovery/:tes",
    name: "SelfDiscovery",
    component: SelfDiscovery,
    props: true
  },
];

export default routes.map((route) => {
  return { ...route, meta: { public: false } };
});
