<template>
  <div class="total-value" :class="setColorClass">Balance: {{ total }}</div>
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
  computed: {
    setColorClass: function() {
      if (this.total === 0) {
        return 'zero-color';
      } else if (this.total < 0) {
        return 'below-zero-color';
      }
      return '';
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

.total-value.zero-color {
  color: #000;
  background: rgba(173, 173, 173, 0.151);
}

.total-value.below-zero-color {
  color: rgba(219, 13, 13, 0.918);
  background: rgba(255, 18, 1, 0.514);
}
</style>
