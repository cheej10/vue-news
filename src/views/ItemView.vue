<template>
  <div>
    <div class="item-info">
      <i class="fas fa-user fa-3x"></i>
      <div>
      <p class="user">
        <router-link v-bind:to="`/user/${Items.user}`">{{ Items.user }}</router-link>
        </p>
      <p class="time_ago">{{ "posted "+Items.time_ago }}</p>
      </div>
    </div>
    <p class="item-title">{{ Items.title }}</p>
    <div v-html="Items.content"></div>
  </div>
</template>

<script>
export default {
  computed: {
    Items() {
      return this.$store.state.item;
    }
  }
}
</script>

<style scoped>
.item-title {
  font-weight: bold;
  font-size: larger;
}
.fa-user {
  padding: 20px;
}
.item-info {
  display: flex;
  align-items: center;
}
.user, .time_ago {
  margin: 0;
}
.time_ago {
  font-size: small;
}
.user a {
  text-decoration: none;
  color: black;
}
.user a:hover {
  text-decoration: underline;
}
</style>