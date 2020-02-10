<template>
  <div class="user-list-box">
    <div class="user-list-title-wrapper">
      <h3 class="user-list-title">Top 10 Score</h3>
    </div>
    <ul class="ul-wrapper">
      <li
        v-for="(scoreDatum, index) in scoreList"
        class="d-flex justify-content-between align-items-center mt-2 mr-5"
      >
        <label class="score-label">{{ index + 1 }}.Score</label>
        <label class="name-label"
          >{{ scoreDatum.name }}({{ scoreDatum.score }})</label
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    scoreList() {
      return this.$store.getters.getScoreList;
    }
  }
};
</script>

<style>
.user-list-title-wrapper {
  background-color: #00bce5;
  height: 66px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
}
.user-list-title {
  margin: 5px;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.user-list-box {
  border-radius: 10px;
  box-shadow: 0px 3px 0px #e5e5e5;
  background: #f7f9fa;
}
.score-label {
  color: #91949f;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
}
.name-label {
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 32px;
  color: #5d6980;
}
</style>
