<template>
  <div class="card border">
    <div class="avatar">
      <img class="avatar" v-bind:src="avatarURL" />
    </div>
    <div class="username">
      <h2>{{ username }}'s Gists</h2>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    username: String,
    avatarURL: String
  }
}

</script>

<style scoped>

.avatar {
  width: 72px;
  height: 72px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 8px;
}

.username {
  margin: 0 16px 0 16px;
  display: inline-block;
  vertical-align: middle;
}

</style>
