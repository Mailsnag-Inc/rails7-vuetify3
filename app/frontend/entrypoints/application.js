import { createApp } from "vue";
import vuetify from "~/plugins/vuetify";

import App from "~/app";

const app = createApp({});

app.use(vuetify);

app.component("App", App);

app.mount("#app");
