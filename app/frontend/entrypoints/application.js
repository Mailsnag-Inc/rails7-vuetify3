import { createApp, defineAsyncComponent } from "vue";
import vuetify from "~/plugins/vuetify";

import App from "~/app";
const BlogsIndex = defineAsyncComponent(() => import("~/pages/blogs/index"));
const BlogsShow = defineAsyncComponent(() => import("~/pages/blogs/show"));

const app = createApp({});

app.use(vuetify);

app.component("App", App);
app.component("BlogsIndex", BlogsIndex);
app.component("BlogsShow", BlogsShow);

app.mount("#app");
