<template>
  <div>
    <MineBox
      v-for="box in mineBoxes"
      :gridNumber="mineBoxes.length"
      :isDanger="box.isDanger"
      :id="box.id"
      :key="box.id"
    />
  </div>
</template>

<script>
import MineBox from './MineBox';

export default {
  components: {
    MineBox
  },
  computed: {
    mineBoxes() {
      return this.$store.getters.getGameLayout;
    }
  }
};
</script>
