<template>
  <div>
    <div v-if=withCard>
      <div class="card">
        <div class="loading"></div>
      </div>
    </div>
    <div v-else>
      <div class="wrap">
        <div class="loading"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    withCard: Boolean
  }
}

</script>

<style scoped>

.wrap {
  margin: 40px auto 40px auto;
}

.loading {
  margin: auto;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 6px solid brown;
  border-right-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {transform: rotate(0deg);}
  50% {transform: rotate(180deg);}
  100% {transform: rotate(360deg);}
}

</style>
