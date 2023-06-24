<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <v-icon start>{{ mdiPost }}</v-icon>
            Showing Blog {{ blog.id }}
          </v-card-title>
          <v-card-text>
            Blog contents go here: {{ blog.name }}
          </v-card-text>
          <v-card-actions>
            <v-btn variant="plain" :href="blogsLink()"> Back to Blogs </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPost } from "@mdi/js";

export default {
  props: {
    blog: { type: Object, required: true },
  },
  data() {
    return {
      mdiPost,
    };
  },
  methods: {
    blogsLink() {
      return `/blogs`;
    },
  },
};
</script>
