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
  mounted() {
    const url = this.base_api_url + this.base_projects_url + `/` + `this.$route.params.id`;
    // const slug = this.$route.params.id;
    // const url = this.base_api_url + this.base_projects_url + `/` * 37;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          //   console.log(response.data.response);
          this.project = response.data.response;
          this.loading = false;
        } else {
            this.$router.push({name: 'not-found'})
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<template>
  <div v-if="project" class="container_img">
    <template v-if="project.cover_image.startsWith('uploads')">
      <img
        height="80%"
        width="100"
        :src="base_api_url + '/storage/' + project.cover_image"
        alt=""
      />
    </template>
    <template>
      <img :src="project.cover_image" alt="" />
    </template>

    <h3 class="py-4 font-bold text-center">
      {{ project.title }}
    </h3>
  </div>
</template>
<style>
.container_img {
  height: 400px;
}

img {
  object-fit: contain;
}
</style>
