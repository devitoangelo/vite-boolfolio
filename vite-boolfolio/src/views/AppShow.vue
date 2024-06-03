<script>
import axios from 'axios';
import { useRoute } from 'vue-router'

export default {
    name: 'AppShow',
    data() {
        return {

            loading: true,
            laterProjects: null,
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',


        }
    },
    methods: {
        getProjectView(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    if (response.data.success) {
                        console.log(response.data.response);
                        this.laterProjects = this.response.data.response
                        this.loading = false
                        console.log(this.laterProjects);
                    } else {

                    }

                })
                .catch(err => {
                    console.error(err)
                }
                )
        }

    },
    mounted() {

        // console.log(this.$route.params.id, this.base_api_url, this.base_projects_url);
        const slug = this.$route.params.slug
        const url = this.base_api_url + this.base_projects_url + '/' + slug;
        this.getProjectView(url)
        // console.log(url);




    }

}

</script>

<template>
    <router-link :to="{ name: 'AppShow', params: { slug: project } }"> View post</router-link>
    <div class="container">

        <div style="color: white;">{{ $route.params.id }} </div>


    </div>
</template>
<style></style>

