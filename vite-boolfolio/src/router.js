import { createWebHistory, createRouter } from 'vue-router'
import AppHome from "./views/AppHome.vue";
import AppBlog from "./views/AppBlog.vue";
import AppAbout from "./views/AppAbout.vue";
import AppContacts from "./views/AppContacts.vue";
import AppShow from "./views/AppShow.vue";





const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            name: 'AppShow',
            path: '/project/:slug',
            component: AppShow
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        // {
        //     path: '/:pathMatch',
        //     name: '',
        //     component: NotFaund

        // }

    ]
})

export default router;

