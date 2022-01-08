import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_ITEM(state, item) {
            state.item = item;
        }
    },
    actions: {
        async FETCH_NEWS(context) {
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        },
        async FETCH_ASK(context) {
            const response = await fetchAskList();
            context.commit('SET_ASK', response.data)
            return response;
        },
        async FETCH_JOBS(context) {
            const response = await fetchJobsList();
            context.commit('SET_JOBS', response.data)
            return response;
        },
        async FETCH_USER(context, username) {
            const response = await fetchUserInfo(username);
            context.commit('SET_USER', response.data)
            return response;
        },
        async FETCH_ITEM(context, id) {
            const response = await fetchItemList(id);
            context.commit('SET_ITEM', response.data)
            return response;
        }
    }
})