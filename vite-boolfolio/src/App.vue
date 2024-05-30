<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {

    name: 'App',
    components: {
        AppHeader,

    },
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
            projects: [],
            loading: true

        }
    },
    methods: {

        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.projects
                    this.loading = false
                })
                .catch(err => {

                    consol.error(err);

                })

        }
    },
    mounted() {
        let url = this.base_api_url + this.base_projects_url
        this.callApi(url);
    }


}

</script>

<template>
    <header>
        <AppHeader />
    </header>


    <main>
        <div class="container">
            <div class="row">
                <div class="col" v-for="project in projects.data">
                    <div class="card-img-top">
                        <template v-if="project.cover_image.startsWith('uploads')">
                            <img :src="base_api_url + '/storage/' + project.cover_image" alt="">
                        </template>
                        <template>
                            <img :src="project.cover_image" alt="">
                        </template>





                    </div>
                    <h2>
                        {{ project.title }}

                    </h2>
                </div>
            </div>
        </div>


    </main>


    <footer>
        footer
    </footer>
</template>

<style></style>
