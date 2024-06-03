<script>
import axios from 'axios';

export default {
    name: 'AppHome',

    data() {
        return {

            loading: true,
            laterProjects: [],
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/latest',

        }
    },
    methods: {

        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    this.laterProjects = response.data.projects
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
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>My Projects</h1>
                <p>
                    My projects, Angelo Devto
                </p>
                
            </div>
            <div class="col">
                <h1>Technologies used</h1>
                <ul class="list_technologies">
                    <li class="font_list">
                        <i class="fa-brands fa-html5"></i>
                    </li>
                    <li class="font_list">

                        <i class="fa-brands fa-js"></i>
                    </li>
                    <li class="font_list">
                        <i class="fa-brands fa-css3-alt"></i>
                    </li>
                    <li class="font_list">
                        <i class="fa-brands fa-php"></i>
                    </li>
                    <li class="font_list">
                        <i class="fa-brands fa-laravel"></i>
                    </li>
                    <li class="font_list">
                        <i class="fa-brands fa-vuejs"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container ">
        <h1 class="latest_projects">Latest Projects</h1>
        <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4" style="justify-content: center;">
            <div class="col " v-for="project in laterProjects">
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
</template>

<style>
.list_technologies {
    list-style: none;
    display: flex;
    gap: 2rem;

    .font_list {
        font-size: 1.5rem;
    }

}

.latest_projects {
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 5rem;
    margin-bottom: 2rem;
}
</style>