import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../ui/home/pages/HomePage.vue";
import ResourcesPage from "../ui/resources/pages/ResourcesPage.vue";
import ContactPage from "../ui/contact/pages/ContactPage.vue";

const routes = [
  { name: "Home", path: "/", component: HomePage },
  { name: "Resources", path: "/resources", component: ResourcesPage },
  { name: "Contact", path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
