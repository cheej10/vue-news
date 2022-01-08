import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            component: NewsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/jobs',
            component: JobsView
        },
        {
            path: '/user/:id',
            component: UserView,
            beforeEnter: (to, from, next) => {
                const userName = to.params.id;
                store.dispatch('FETCH_USER', userName)
                    .then(() => {
                        next();
                    })
                    .catch((error) => console.log(error));
            }
        },
        {
            path: '/item/:id',
            component: ItemView,
            beforeEnter: (to, from, next) => {
                const id = to.params.id;
                store.dispatch('FETCH_ITEM', id)
                    .then(() => {
                        next();
                    })
                    .catch((error) => console.log(error));
            }
        }
    ]
});