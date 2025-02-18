import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";
import Browse from "../pages/Browse.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Admin from "../pages/Admin.vue";
import Layout from "../components/Layout.vue";
import CatalogLayout from "../components/Catalog/Layout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
          meta: { requiresAuth: false }, 
        },
        {
          path: "/catalog",
          component: CatalogLayout,
          meta: { requiresAuth: false },
          children: [
            {
              path: "",
              name: "Catalog",
              component: Browse,
              meta: { requiresAuth: false }, 
            },
            {
              path: "browse",
              name: "Browse",
              component: Browse,
              meta: { requiresAuth: true },
            },
            {
              path: "dashboard",
              name: "Dashboard",
              component: Dashboard,
              meta: { requiresAuth: true },
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { requiresAuth: false },
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: { requiresAuth: true },
    },
  ],
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  console.log("Navigating to:", to.path)
  console.log("User authenticated:", authStore.isAuthenticated)

  // Check if the route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    console.log("Access denied. Redirecting to login...");
    return next("/login");
  }

  next();
});

export default router;
