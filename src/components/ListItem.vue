<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="user in ListItems" v-bind:key="user.id">
        <div class="points">{{ user.points || 0 }}</div>
        <div>
          <p class="news-title">
                <a v-if="user.domain" v-bind:href="user.url">{{ user.title }}</a>
                <router-link v-else v-bind:to="`/item/${user.id}`">{{ user.title }}</router-link>
         </p>
          <small class="news-user">
            {{ user.time_ago }} by
            <router-link v-if="user.user" v-bind:to="`/user/${user.user}`">{{ user.user }}</router-link>
            <a v-else v-bind:href="user.url">{{ user.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    created() { 
        const path = this.$route.path;
        if (path === '/news') {
            this.$store.dispatch('FETCH_NEWS');
        } else if (path === '/ask') {
            this.$store.dispatch('FETCH_ASK');
        } else {
            this.$store.dispatch('FETCH_JOBS');
        }
    },
    computed: {
        ListItems() {
            const path = this.$route.path;
            if (path === '/news') {
                return this.$store.state.news;
            } else if (path === '/ask') {
                return this.$store.state.ask;
            } else {
                return this.$store.state.jobs;
            }
        }
    }
}
</script>

<style scoped>
.news-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #DCDCDC;
}
.points {
  width: 80px;
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: hsl(150deg 100% 25%);
}
a {
  color: black;
  text-decoration: none;
}
.news-title a:hover {
  color: hsl(150deg 100% 25%);
}
</style>