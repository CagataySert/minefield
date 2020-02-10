<template>
  <select
    @change="onChange($event)"
    class="form-control form-control-lg box custom-select"
  >
    <option v-for="option in options" :key="option">{{ option }} Grid</option>
  </select>
</template>

<script>
export default {
  props: ['options'],
  methods: {
    onChange(e) {
      this.$emit('select', e.target.value);
    }
  }
};
</script>
<style>
.box {
  width: 100%;
  height: 60px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f9fa;
  box-shadow: 0px 3px 0px #e6e6e6;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #91949f;
}
</style>
