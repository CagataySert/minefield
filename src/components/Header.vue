<template>
  <div class="row">
    <div class="col-6">
      <img alt="Vue logo" src="../assets/logo.png" width="100%" height="auto" />
    </div>
    <div
      class="col-3 offset-3 d-flex align-items-center justify-content-center"
    >
      <InfoBox text="Score" :secondText="score" />
    </div>
  </div>
</template>

<script>
import InfoBox from './InfoBox';
export default {
  components: {
    InfoBox
  },
  computed: {
    score() {
      return this.$store.getters.getScore;
    }
  }
};
</script>
