<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-table hover>
              <template #default>
                <thead>
                <tr>
                  <th class="text-start" style="width: 70px;">ID</th>
                  <th class="text-start">Name</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="blog in blogs" :key="blog.id">
                  <td>
                    <code>{{ blog.id }}</code>
                  </td>
                  <td>
                    <v-btn variant="plain" :href="blogLink(blog)">
                      <v-icon start>{{ mdiPost }}</v-icon> {{ blog.name }}
                    </v-btn>
                  </td>
                </tr>
                </tbody>
              </template>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPost } from "@mdi/js";

export default {
  props: {
    blogs: { type: Array, required: true },
  },
  data() {
    return {
      mdiPost,
    };
  },
  methods: {
    blogLink(blog) {
      return `/blogs/${blog.id}`;
    },
  },
};
</script>
