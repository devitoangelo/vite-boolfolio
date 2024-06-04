<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "AppShow",
  data() {
    return {
      loading: true,
      project: null,
      base_api_url: "http://127.0.0.1:8000",
      base_projects_url: "/api/projects",
    };
  },
  methods: {

  },
  mounted() {
    console.log(this.$route.params.id, this.base_api_url, this.base_projects_url);

    const url =
      this.base_api_url + this.base_projects_url + "/${this.$route.params.slug}";
    console.log(url);

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          console.log(response.data.response);
          this.project = response.data.response;
          this.loading = false;
        } else {
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<template v-if="project">

  <template v-if="project.cover_image.startsWith('uploads')">
    <img :src="base_api_url + '/storage/' + project.cover_image" alt="" />
  </template>
  <template>
    <img :src="project.cover_image" alt="" />
  </template>



       <h3 class="py-4 font-bold">
        {{ project.title }}
      </h3>

</template>
<style></style>
