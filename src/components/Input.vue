<template>
  <input
    v-model="name"
    placeholder="Name"
    type="text"
    class="form-control box"
  />
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.getters.getCurrentUser;
      },
      set(value) {
        this.$emit('change', value);
        this.$store.commit('updateUsername', value);
      }
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
}
</style>
