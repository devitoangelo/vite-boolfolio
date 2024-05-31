<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';





export default {

    name: 'App',
    components: {
        AppHeader,
        AppFooter,




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
        <div class="container ">
            <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4" >
                <div class="col " v-for="project in projects.data">
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
                    <p>
                        {{ project.content }}
                    </p>
                    
                </div>
            </div>
        </div>

    </main>


    <footer>

        <AppFooter />



    </footer>
</template>

<style>

main {

    background-color: rgb(40, 39, 39);
    color: white;
    padding-top: 5rem;

}
</style>
