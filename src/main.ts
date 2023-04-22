import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { provideApolloClient } from "@vue/apollo-composable";

import App from "./App.vue";
import "./style.css";
import { routes } from "./routes";
import apolloClient from "./apolloClient";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

provideApolloClient(apolloClient);

app.use(router);
app.mount("#app");
