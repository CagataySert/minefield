<template>
  <button
    @click="handleClick"
    :class="[orangeBg ? 'orangeBg' : '', greenBg ? 'greenBg' : '', 'button']"
  >
    <span class="button-text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: ['text', 'orangeBg', 'greenBg'],
  data() {
    return {
      color: true
    };
  },
  methods: {
    handleClick() {
      this.$emit('clicked', true);
    }
  }
};
</script>

<style>
.button {
  width: 100%;
  height: 60px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f9fa;
  box-shadow: 0px 3px 0px #e6e6e6;
}
.button-text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #fff;
}
.orangeBg {
  background-color: #ff8a00;
  color: #fff;
}
.greenBg {
  background-color: #25a35c;
  color: #fff;
}
</style>
