<template>
  <div>
    <div class="item-info">
      <i class="fas fa-user fa-3x"></i>
      <div>
        <p class="id">{{ User.id }}</p>
        <p class="joined">{{ `joined ${User.created}, ${User.karma}` }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    User() {
      return this.$store.state.user;
    }
  },
}
</script>

<style scoped>
.fa-user {
  padding: 20px;
}
.item-info {
  display: flex;
  align-items: center;
}
.id, .joined {
  margin: 0;
}
.joined {
  font-size: small;
}
</style>