import { createRouter, createWebHistory } from "vue-router";
import Main from "../Pages/Main/Main.vue";
import About from "../Pages/About/About.vue";
import LearningJourney from "../Pages/Learning Journey/LearningJourney.vue";
import Contact from "../Pages/Contact/Contact.vue";
import Blog from "../Pages/Blog/Blog.vue";
import Projects from "../Pages/Projects/Projects.vue";

const routes = [
  { path: "/", name: "Home", component: Main },
  { path: "/About", name: "About", component: About },
  { path: "/Learning", name: "Learning Journey", component: LearningJourney },
  { path: "/Contact", name: "Contact", component: Contact },
  { path: "/Blog", name: "Blog", component: Blog },
  { path: "/Projects", name: "Projects", component: Projects },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
