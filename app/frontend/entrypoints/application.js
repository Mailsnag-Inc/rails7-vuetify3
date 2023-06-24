import * as Turbo from "@hotwired/turbo";
Turbo.start();

import { createApp, defineAsyncComponent } from "vue";
import TurbolinksAdapter from "vue-turbolinks";
import vuetify from "~/plugins/vuetify";

import App from "~/app";
const BlogsIndex = defineAsyncComponent(() => import("~/pages/blogs/index"));
const BlogsShow = defineAsyncComponent(() => import("~/pages/blogs/show"));

document.addEventListener("turbo:load", () => {
  const app = createApp({});

  app.use(TurbolinksAdapter);
  app.use(vuetify);

  app.component("App", App);
  app.component("BlogsIndex", BlogsIndex);
  app.component("BlogsShow", BlogsShow);

  app.mount("#app");
});
