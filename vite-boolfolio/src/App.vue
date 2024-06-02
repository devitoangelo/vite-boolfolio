<script >

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { RouterView } from 'vue-router';





export default {

    name: 'App',
    components: {
    AppHeader,
    AppFooter,
    RouterView
},
   


}

</script>

<template>
    <header>
        <AppHeader />
    </header>


    <main>
        <RouterView/>
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
