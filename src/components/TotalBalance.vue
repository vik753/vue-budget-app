<template>
  <div class="total-value">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.total-value {
  display: block;
  max-width: 460px;
  color: rgba(29, 192, 14, 0.548);
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: rgba(27, 252, 6, 0.151);
  font-size: 26px;
  text-transform: uppercase;
  margin: 0 auto 1rem;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
</style>
