<template>
  <div class="box text">
    <span class="text"> {{ text }}</span>
    <span class="secondText"> {{ secondText }}</span>
  </div>
</template>

<script>
export default {
  props: ['text', 'secondText']
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
.text {
  padding: 0 10px 0 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #91949f;
}
.secondText {
  padding: 0 10px 0 10px;
  color: #5d6980;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
